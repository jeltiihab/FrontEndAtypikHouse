import { useState, useCallback } from "react";

const useNavCards = () => {
    const [route, setRoute] = useState("Properties");

    const selectAction = useCallback(
        (option) => {
            if (route === option) return;
            setRoute(option);
        },
        [route]
    );

    return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavCards;