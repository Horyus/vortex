"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const web3_sagas_1 = require("./web3/web3.sagas");
function* rootSaga() {
    yield effects_1.all([
        effects_1.fork(web3_sagas_1.web3Sagas)
    ]);
}
exports.default = rootSaga;