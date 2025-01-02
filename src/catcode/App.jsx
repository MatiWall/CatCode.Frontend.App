import { createApp } from "@plugger/app";
import { rootExtensionBluePrint } from "@plugger/extension";



const app = createApp({
    rootExtensions: [rootExtensionBluePrint.make()],
});

const Root = app.createRoot();
export default Root