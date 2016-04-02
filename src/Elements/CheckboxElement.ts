import Element from "../Element";
import * as _ from "underscore";

export default class CheckboxElement extends Element {

    public _tagName:string = 'checkbox-element';

    public _trueValue:any = true;

    public _falseValue:any = false;

    public _options:any[];

    public constructor() {
        super();
        this.initialize();
    }

    public trueValue(trueValue:any):this {
        this._trueValue = trueValue;
        return this;
    }

    public falseValue(falseValue:any):this {
        this._falseValue = falseValue;
        return this;
    }

    public getTrueValue():any {
        return _.isBoolean(this._trueValue) || _.isNumber(this._trueValue) ? this._trueValue : `'${this._trueValue}'`;
    }

    public getFalseValue():any {
        return _.isBoolean(this._falseValue) || _.isNumber(this._trueValue) ? this._falseValue : `'${this._falseValue}'`;
    }
}
