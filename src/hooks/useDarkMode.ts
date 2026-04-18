import { useEffect, useState } from 'react';

export function useDarkMode() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        // 如果有缓存用缓存，否则跟随系统
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // 1. 处理类名切换逻辑
        if (dark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        // 2. 核心修复：监听系统主题变化
        const handleChange = (e: MediaQueryListEvent) => {
            setDark(e.matches);
        };

        // 现代浏览器监听方式
        mediaQuery.addEventListener('change', handleChange);

        // 清理监听器，防止内存泄漏
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [dark]);

    return { dark, toggle: () => setDark(prev => !prev) };
}