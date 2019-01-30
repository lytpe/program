function addNum (num1, num2) {
    let sq1, sq2, m;
    try {
        sq1 = num1.toString().split('.')[1].length;
    }
    catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = num2.toString().split('.')[1].length;
    }
    catch (e) {
        sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
Component({
    externalClasses: ['i-class'],
    properties: {
        // small || default || large
        ids:{
          type:Number,
          value:1
        },
        size: String,
        value: {
            type: Number,
            value: 1
        },
        min: {
            type: Number,
            value: -Infinity
        },
        max: {
            type: Number,
            value: Infinity
        },
        step: {
            type: Number,
            value: 1
        }
    },
    methods: {
        handleChangeStep(e, type) {
            const { dataset = {} } = e.currentTarget;
            const { disabled } = dataset;

            //console.log("handlechangesetp this.data is ")
            //console.log(this.data)
            const { step } = this.data;
           // console.log("the step is "+step)
            let { value } = this.data;
            //console.log("the value is "+value)
            let {ids}=this.data;
            //console.log("this id is "+ids)
            if (disabled) return null;
            if (type === 'minus') {
                value = addNum(value, -step);
            } else if (type === 'plus') {
                value = addNum(value, step);
            }
            if (value < this.data.min || value > this.data.max) return null;
            this.handleEmit(value,type,ids);
        },
        handleMinus(e) {
            this.handleChangeStep(e, 'minus');
        },
        handlePlus(e) {
         // console.log("handleplus data:")
         // console.log(e)
          // console.log(e.currentTarget.dataset)
            this.handleChangeStep(e, 'plus');
        },
        handleBlur(e) {
            let { value ,ids} = e.detail;
            const { min, max} = this.data;
            if (!value) {
                setTimeout(() => {
                    this.handleEmit(value,ids);
                }, 16);
                return;
            }
            value = +value;
            if (value > max) {
                value = max;
            } else if (value < min) {
                value = min;
            }
            this.handleEmit(value,ids);
        },
        handleEmit (value, type,ids) {
            const data = {
                value: value,
                ids:ids,
            };
            if (type) data.type = type;
            this.triggerEvent('change', data);
        }
    }
});
