"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  CART_HINT_SEEN_KEY,
  DARK_THEME_KEYS,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  isThemeKey,
  type ThemeKey,
} from "@/lib/themes";

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (key: ThemeKey) => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  showCartHint: boolean;
  markCartHintSeen: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(DEFAULT_THEME);
  const [cartOpen, setCartOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [cartHintSeen, setCartHintSeen] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved && isThemeKey(saved) && DARK_THEME_KEYS.includes(saved)) {
      setThemeState(saved);
    } else if (saved) {
      // User had a light theme saved — migrate to default dark
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
    }
    setCartHintSeen(localStorage.getItem(CART_HINT_SEEN_KEY) === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, ready]);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const setTheme = useCallback((key: ThemeKey) => {
    setThemeState(key);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const toggleCart = useCallback(() => setCartOpen((open) => !open), []);

  const markCartHintSeen = useCallback(() => {
    setCartHintSeen(true);
    localStorage.setItem(CART_HINT_SEEN_KEY, "true");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      cartOpen,
      openCart,
      closeCart,
      toggleCart,
      showCartHint: cartHintSeen === false,
      markCartHintSeen,
    }),
    [theme, setTheme, cartOpen, openCart, closeCart, toggleCart, cartHintSeen, markCartHintSeen],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
