import { Routes, Route } from 'react-router-dom';
import { Views } from '../views';
import { Layouts } from '../layouts';

export default function MainRoutes() {
    return (
        <Layouts.MainLayout>
            <Routes>
                <Route path='' element={<Views.DashbaordView />}/>
                <Route path='mes-comptes' element={<Views.UserListView />}/>
                <Route path='mes-filleuls' element={<Views.ClientListView />}/>
                <Route path='ma-boutique' element={<Views.ProductListView />}/>                
                <Route path='mes-achats' element={<Views.OrderListView />}/>
                <Route path='nouveau-produit' element={<Views.ProductCreateView />}/>
                <Route path='mon-profil' element={<Views.UserEditView />}/>
                <Route path='articles/:id/modifier' element={<Views.ProductEditView />}/>
                <Route path='notifications' element={<Views.NotificationListView />}/>
                <Route path='profil' element={<Views.ProfileView />}/>
            </Routes>
        </Layouts.MainLayout>
    )
}