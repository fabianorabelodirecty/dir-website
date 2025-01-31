import PageWrapper from "./components/layout/PageWrapper";
import RouterManager from "./routes/routes";

function App() {
    return (
        <>
            <div className="App">
                <PageWrapper>
                    <RouterManager />
                </PageWrapper>
            </div>
        </>
    );
}

export default App;
