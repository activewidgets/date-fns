/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {format as dateFormat, parseJSON} from 'date-fns';
import {format} from '@activewidgets/options';


export function dates(config){
    return format(pattern => {

        if (typeof pattern != 'string' || /[#0]/.test(pattern)){
            return;
        }

        return function(value){
            try { 
                return dateFormat(parseJSON(value), pattern, config);
            } 
            catch(err){ 
                return value 
            }
        }
    });
}
