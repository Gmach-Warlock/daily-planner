import { Outlet } from "react-router";
import Header from "./components/Header/Header";

export default function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <h1>Testing</h1>
            </main>
        </>
    );
};