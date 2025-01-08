import { createApp } from "@plugger/app";
import { rootExtensionBluePrint, createExtension , rootComponentRef} from "@plugger/extension";
import { EnvConfigLoader } from '@plugger/configuration-loader'

import {z} from 'zod';


const testExtension = createExtension({
    namespace: 'app',
    name: 'app',
    kind: 'component',
    attachToo: {namespace: 'root', name: 'app', kind: 'component'},
    output: [
        rootComponentRef
    ], 
    configSchema: z.object({
        title: z.string().default('hello from schema')
    }),
    provider: ({input, config}) => {
        return [
            rootComponentRef.with(<div>this is from my custom extension {config.title}</div>)
        ]
    }
})

const app = createApp({
    rootExtensions: [
        rootExtensionBluePrint.make(),
        testExtension
    ],
    configLoader: new EnvConfigLoader('APP_CONFIG')
});

console.log(app.configLoader.getExtensionConfig('app', 'app', 'component'))

const Root = app.createRoot();
export default Root