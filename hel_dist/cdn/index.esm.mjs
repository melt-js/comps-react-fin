import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/name
|
|--------------------------------------------------------------------------
*/
var LIB_NAME = 'comps-react-fin';

var lib = exposeLib(LIB_NAME);
var HelloRemoteReactComp = lib.HelloRemoteReactComp;
var comps = lib;

export { HelloRemoteReactComp, comps, lib as default, lib };
