"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4978],{26673:e=>{e.exports=JSON.parse('{"functions":[{"name":"IsUnreliable","desc":"Returns `true` if the underlying RemoteSignal is bound to an\\nUnreliableRemoteEvent object.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":69,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"Connect","desc":"Connect a function to the signal. Anytime a matching ClientRemoteSignal\\non a client fires, the connected function will be invoked with the\\narguments passed by the client.","params":[{"name":"fn","desc":"The function to connect","lua_type":"(player: Player, ...: any) -> nil"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"method","source":{"line":80,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"Fire","desc":"Fires the signal at the specified client with any arguments.\\n\\n:::note Outbound Middleware\\nAll arguments pass through any outbound middleware (if any)\\nbefore being sent to the clients.\\n:::","params":[{"name":"player","desc":"The target client","lua_type":"Player"},{"name":"...","desc":"Arguments passed to the client","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":113,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"FireAll","desc":"Fires the signal at _all_ clients with any arguments.\\n\\n:::note Outbound Middleware\\nAll arguments pass through any outbound middleware (if any)\\nbefore being sent to the clients.\\n:::","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":126,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"FireExcept","desc":"Fires the signal to all clients _except_ the specified\\nclient.\\n\\n:::note Outbound Middleware\\nAll arguments pass through any outbound middleware (if any)\\nbefore being sent to the clients.\\n:::","params":[{"name":"ignorePlayer","desc":"The client to ignore","lua_type":"Player"},{"name":"...","desc":"Arguments passed to the other clients","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":141,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"FireFilter","desc":"Fires the signal at any clients that pass the `predicate`\\nfunction test. This can be used to fire signals with much\\nmore control logic.\\n\\n:::note Outbound Middleware\\nAll arguments pass through any outbound middleware (if any)\\nbefore being sent to the clients.\\n:::\\n\\n:::caution Predicate Before Middleware\\nThe arguments sent to the predicate are sent _before_ getting\\ntransformed by any middleware.\\n:::\\n\\n```lua\\n-- Fire signal to players of the same team:\\nremoteSignal:FireFilter(function(player)\\n\\treturn player.Team.Name == \\"Best Team\\"\\nend)\\n```","params":[{"name":"predicate","desc":"","lua_type":"(player: Player, argsFromFire: ...) -> boolean"},{"name":"...","desc":"Arguments to pass to the clients (and to the predicate)","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":171,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"FireFor","desc":"Fires a signal at the clients within the `players` table. This is\\nuseful when signals need to fire for a specific set of players.\\n\\nFor more complex firing, see `FireFilter`.\\n\\n:::note Outbound Middleware\\nAll arguments pass through any outbound middleware (if any)\\nbefore being sent to the clients.\\n:::\\n\\n```lua\\nlocal players = {somePlayer1, somePlayer2, somePlayer3}\\nremoteSignal:FireFor(players, \\"Hello, players!\\")\\n```","params":[{"name":"players","desc":"","lua_type":"{ Player }"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":195,"path":"modules/comm/Server/RemoteSignal.luau"}},{"name":"Destroy","desc":"Destroys the RemoteSignal object.","params":[],"returns":[],"function_type":"method","source":{"line":204,"path":"modules/comm/Server/RemoteSignal.luau"}}],"properties":[],"types":[{"name":"Connection","desc":"Represents a connection.","fields":[{"name":"Disconnect","lua_type":"() -> nil","desc":""},{"name":"Connected","lua_type":"boolean","desc":""}],"source":{"line":26,"path":"modules/comm/Server/RemoteSignal.luau"}}],"name":"RemoteSignal","desc":"Created via `ServerComm:CreateSignal()`.","realm":["Server"],"source":{"line":15,"path":"modules/comm/Server/RemoteSignal.luau"}}')}}]);