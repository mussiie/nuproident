const stream = vega.isString(evt) ? vega.parseSelector(evt, 'view') : vega.array(evt);
