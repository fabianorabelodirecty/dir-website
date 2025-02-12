import { ToastContainer } from "react-toastify";
import PageWrapper from "./components/layout/PageWrapper";
import RouterManager from "./routes/routes";
// import CursorLens from "./components/ui/Cursor";

function App() {
    return (
        <>
            <div className="App">
                {/* <CursorLens /> */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    style={{ zIndex: 999999999 }}
                />
                <PageWrapper>
                    <RouterManager />
                </PageWrapper>
            </div>
        </>
    );
}

export default App;
