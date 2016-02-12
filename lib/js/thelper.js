/*
 * JS lib of frequently used functions
 * Author: TC McCarthy
 * 2/12/16
 */

(function() {
    var tHelper = function() {

            var _this;

            /****************
             * String Methods
             *****************/

            String.prototype.superTrim = function() {
                return this.replace(/\s+/g, " ").trim();
            };

            String.prototype.makeNumber = function() {
                var val = this.replace(/[,]+/g, "");
                return (val.indexOf(".") > -1) ? parseFloat(val) : parseInt(val);
            };


            /****************
             * Number Methods
             *****************/

            Number.prototype.format = function() {
                return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };


            /******************
             * Custom functions
             *******************/

            this.is_empty = function(e) {
                return (typeof e === "undefined" || !e);
            };
        },

        th = new tHelper();

    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = th;
    } else {
        window.t = th;
    }
})();