"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = void 0;
const isDev = () => process.env.NODE_ENV !== 'production';
exports.isDev = isDev;
