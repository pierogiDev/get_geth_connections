"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gethSocketClient = exports.gethHttpClient = exports.gethVpnSocketClient = exports.gethVpnHttpClient = void 0;
require("dotenv/config");
const web3_1 = __importDefault(require("web3"));
let gethVpnSocketClient = new web3_1.default(`${process.env.GETH_VPN_SOCKET_API_ADDRESS}`).eth;
exports.gethVpnSocketClient = gethVpnSocketClient;
let gethVpnHttpClient = new web3_1.default(`${process.env.GETH_VPN_HTTP_API_ADDRESS}`).eth;
exports.gethVpnHttpClient = gethVpnHttpClient;
let gethSocketClient = new web3_1.default(`${process.env.GETH_LAN_SOCKET_API_ADDRESS}`).eth;
exports.gethSocketClient = gethSocketClient;
let gethHttpClient = new web3_1.default(`${process.env.GETH_LAN_HTTP_API_ADDRESS}`).eth;
exports.gethHttpClient = gethHttpClient;
