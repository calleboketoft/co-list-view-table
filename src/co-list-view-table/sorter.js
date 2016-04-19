"use strict";
// https://github.com/thelgevold/angular-2-samples
var Sorter = (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data) {
        var _this = this;
        var dataCopy = data.map(function (i) { return Object['assign']({}, i); });
        if (this.key === key) {
            this.direction = -this.direction;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        dataCopy.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return _this.direction;
            }
            else {
                return -_this.direction;
            }
        });
        return dataCopy;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBa0Q7QUFDbEQ7SUFJRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQVc7UUFBN0IsaUJBd0JDO1FBdkJDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUE7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ2xDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUVkLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUNWLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFBO1lBQ3ZCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFBO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUVILGFBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLGNBQU0sU0FrQ2xCLENBQUEifQ==