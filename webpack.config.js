import { resolve as _resolve } from 'path';

export const entry = ["./index.ts"];
export const output = {
    filename: 'api.bundle.js',
    path: _resolve(__dirname, "dist")
};
export const module = {
    rules: [
        { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, },
        { test: /\.json/, loader: "json-loader", exclude: /node_modules/, }
    ]
};
export const resolve = {
    extensions: [".tsx", ".ts", ".js", ".json"]
};
export const target = 'node';
export const node = {
    __dirname: true
};
export const plugins = [];