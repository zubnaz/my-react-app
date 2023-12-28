import {Route, Routes} from "react-router-dom";
import ContainerDefault from "./components/containers/default/ContainerDefault.tsx";
import NoMatch from "./components/pages/NoMatch.tsx";
import ListPage from "./components/containers/list/ListPage.tsx";
import CategoryCreatePage from "./components/containers/create/CategoryCreatePage.tsx";
import EditPage from "./components/containers/edit/edit.tsx";


const App: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<ContainerDefault/>}>
                    <Route index element={<ListPage/>}/>
                    <Route path={'create'} element={<CategoryCreatePage/>}></Route>
                    <Route path={'edit/:id'} element={<EditPage/>}></Route>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;