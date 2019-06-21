export interface IOption {
    threshold?: number;
    onError?: (value: any, type: any, key?: string, index?: number) => void;
    onSucess?: any;
    onTick?: any;
    onCheck?: (value: any, type: any, key?: string, index?: number) => void;
}
declare const check: (value: any, desclarartion: any, option?: IOption | undefined, key?: string | undefined) => boolean;
declare const checkTree: (value: any, nodeDesclarartion: object, option?: IOption | undefined) => boolean;
export { check as default, checkTree };
