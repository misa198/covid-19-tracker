"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vietnam_controller_1 = __importDefault(require("../controllers/vietnam.controller"));
const router = express_1.Router();
router.get('/', vietnam_controller_1.default.getVietnamSummary);
exports.default = router;
