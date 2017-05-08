'use strict';
export const TOCHINE = "TOCHINE";
export const TOENGLISH = "TOENGLISH";
//action中返回type供redux中的数据中心对应处理
export function toCH() {
    return{
        type:TOCHINE,
        payload: {
          data: '你好世界',
          key: '2'
        }
    }
}

export function toEN() {
    return{
        type:TOENGLISH,
    }
}
