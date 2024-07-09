"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5258],{81670:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new timer.","params":[{"name":"interval","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Timer"}],"function_type":"static","source":{"line":73,"path":"modules/timer/init.luau"}},{"name":"Simple","desc":"Creates a simplified timer which just fires off a callback function at the given interval.\\n\\n```lua\\n-- Basic:\\nTimer.Simple(1, function()\\n\\tprint(\\"Tick\\")\\nend)\\n\\n-- Using other arguments:\\nTimer.Simple(1, function()\\n\\tprint(\\"Tick\\")\\nend, true, RunService.Heartbeat, os.clock)\\n```","params":[{"name":"interval","desc":"","lua_type":"number"},{"name":"callback","desc":"","lua_type":"CallbackFn"},{"name":"startNow","desc":"","lua_type":"boolean?"},{"name":"updateSignal","desc":"","lua_type":"RBXScriptSignal?"},{"name":"timeFn","desc":"","lua_type":"TimeFn?\\n"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"static","source":{"line":103,"path":"modules/timer/init.luau"}},{"name":"Is","desc":"Returns `true` if the given object is a Timer.","params":[{"name":"obj","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"static","source":{"line":128,"path":"modules/timer/init.luau"}},{"name":"Start","desc":"Starts the timer. Will do nothing if the timer is already running.\\n\\n```lua\\ntimer:Start()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":167,"path":"modules/timer/init.luau"}},{"name":"StartNow","desc":"Starts the timer and fires off the Tick event immediately. Will do\\nnothing if the timer is already running.\\n\\n```lua\\ntimer:StartNow()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":186,"path":"modules/timer/init.luau"}},{"name":"Stop","desc":"Stops the timer. Will do nothing if the timer is already stopped.\\n\\n```lua\\ntimer:Stop()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":201,"path":"modules/timer/init.luau"}},{"name":"IsRunning","desc":"Returns `true` if the timer is currently running.\\n\\n```lua\\nif timer:IsRunning() then\\n\\t-- Do something\\nend\\n```","params":[],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","source":{"line":218,"path":"modules/timer/init.luau"}},{"name":"Destroy","desc":"Destroys the timer. This will also stop the timer.","params":[],"returns":[],"function_type":"method","source":{"line":225,"path":"modules/timer/init.luau"}}],"properties":[{"name":"Interval","desc":"Interval at which the `Tick` event fires.","lua_type":"number","source":{"line":44,"path":"modules/timer/init.luau"}},{"name":"UpdateSignal","desc":"The signal which updates the timer internally.","lua_type":"RBXScriptSignal | Signal","source":{"line":49,"path":"modules/timer/init.luau"}},{"name":"TimeFunction","desc":"The function which gets the current time.","lua_type":"TimeFn","source":{"line":54,"path":"modules/timer/init.luau"}},{"name":"AllowDrift","desc":"Flag which indicates if the timer is allowed to drift. This\\nis set to `true` by default. This flag must be set before\\ncalling `Start` or `StartNow`. This flag should only be set\\nto `false` if it is necessary for drift to be eliminated.","lua_type":"boolean","source":{"line":62,"path":"modules/timer/init.luau"}},{"name":"Tick","desc":"The event which is fired every time the timer hits its interval.","lua_type":"RBXScriptSignal | Signal","source":{"line":67,"path":"modules/timer/init.luau"}}],"types":[{"name":"CallbackFn","desc":"Callback function.","lua_type":"() -> ()","source":{"line":10,"path":"modules/timer/init.luau"}},{"name":"TimeFn","desc":"Time function.","lua_type":"() -> number","source":{"line":17,"path":"modules/timer/init.luau"}}],"name":"Timer","desc":"The Timer class allows for code to run periodically at specified intervals.\\n\\n```lua\\nlocal timer = Timer.new(2)\\ntimer.Tick:Connect(function()\\n\\tprint(\\"Tock\\")\\nend)\\ntimer:Start()\\n```","source":{"line":36,"path":"modules/timer/init.luau"}}')}}]);