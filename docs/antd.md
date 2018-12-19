# antd 按需加载

## 1. tsconfig.json设置
```
{
	...
	"module": "ESNext",
	"moduleResolution": "node"
}
```

## 2. webpack新增less-loader处理
```
{
	test: /\.less$/,
	use: [{
		loader: "style-loader"
	}, {
		loader: "css-loader"
	}, {
		loader: "less-loader",
		options: {
			javascriptEnabled: true
		}
	}]
}
```
> 如果是less3.X，要加options: { javascriptEnabled: true }

## 3. .babelrc设置
```
{
	"presets": ["es2015", "react"],
	"plugins": [
		["import", {
			"libraryName": "antd",
			"style": true
		}]
	]
}
```

