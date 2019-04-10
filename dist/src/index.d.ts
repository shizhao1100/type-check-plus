export interface Ioption {
    threshold?: number;
    onError?: any;
    onSucess?: any;
    onTick?: any;
    onCheck?: any;
}
declare const check: (value: any, desclarartion: any, option?: Ioption | undefined) => boolean;
declare const checkTree: (value: any, nodeDesclarartion: object, option?: Ioption | undefined) => boolean;
export { check as default, checkTree };
