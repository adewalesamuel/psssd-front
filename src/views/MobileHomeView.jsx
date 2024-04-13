import { Components } from "../components";
import { Layouts } from "../layouts";

export function MobileHomeView() {
    return (
        <Layouts.AuthLayout>
            <Components.HomeScreen />
        </Layouts.AuthLayout>
    )
}