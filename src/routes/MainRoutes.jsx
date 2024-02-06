import { Routes, Route } from 'react-router-dom';
import { Views } from '../views';
import { Layouts } from '../layouts';

export default function MainRoutes() {
    return (
        <Layouts.MainLayout>
            <Routes>
                <Route path='' element={<Views.DashbaordView />}/>
                <Route path='mes-publications' element={<Views.ProductListView />}/>
            </Routes>
        </Layouts.MainLayout>
    )
}