"use client";
import {
    createContext,
    useEffect,
    useRef,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

export interface CardItem {
    id: string | number;
    [key: string]: unknown;
}

export interface CardContextValue {
    cardItems: CardItem[];
    setCardItems: Dispatch<SetStateAction<CardItem[]>>;
    wishlist: CardItem[];
    setWishlist: Dispatch<SetStateAction<CardItem[]>>;
}

const noop: Dispatch<SetStateAction<CardItem[]>> = () => undefined;

export const CardContext = createContext<CardContextValue>({
    cardItems: [],
    setCardItems: noop,
    wishlist: [],
    setWishlist: noop,
});

const Cardprovider = ({ children }: { children: ReactNode }) => {
    const [cardItems, setCardItems] = useState<CardItem[]>([]);
    const [wishlist, setWishlist] = useState<CardItem[]>([]);
    const hasHydrated = useRef(false);

    useEffect(() => {
        const hydrationTimer = window.setTimeout(() => {
            const storedPlan = window.localStorage.getItem("fitlog-plan");
            const storedWishlist = window.localStorage.getItem("fitlog-saved");

            setCardItems(storedPlan ? JSON.parse(storedPlan) : []);
            setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
            hasHydrated.current = true;
        }, 0);

        return () => window.clearTimeout(hydrationTimer);
    }, []);

    useEffect(() => {
        if (!hasHydrated.current) return;
        window.localStorage.setItem("fitlog-plan", JSON.stringify(cardItems));
    }, [cardItems]);

    useEffect(() => {
        if (!hasHydrated.current) return;
        window.localStorage.setItem("fitlog-saved", JSON.stringify(wishlist));
    }, [wishlist]);

    const sharedData = {
        cardItems,
        setCardItems,
        wishlist,
        setWishlist,
    };

    return (
        <CardContext.Provider value={sharedData}>{children}</CardContext.Provider>
    );
};

export default Cardprovider;