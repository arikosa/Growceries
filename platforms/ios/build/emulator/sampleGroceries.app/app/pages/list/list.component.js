"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: [grocery_list_service_1.GroceryListService]
        }), 
        __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBRXpFLElBQVksV0FBVyxXQUFNLDJCQUEyQixDQUFDLENBQUE7QUFHekQscUNBQW1DLDJDQUEyQyxDQUFDLENBQUE7QUFRL0U7SUFPRSx1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixnQkFBVyxHQUFtQixFQUFFLENBQUM7SUFFNEIsQ0FBQztJQUU5RCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFO2FBQzNCLFNBQVMsQ0FBQyxVQUFBLGVBQWU7WUFDeEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkJBQUcsR0FBSDtRQUFBLGlCQXdCQztRQXZCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN0QyxTQUFTLENBQ1IsVUFBQSxhQUFhO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBbEREO1FBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7MkRBQUE7SUFWaEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztZQUNoRSxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztTQUNoQyxDQUFDOztxQkFBQTtJQXlERixvQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFkscUJBQWEsZ0JBd0R6QixDQUFBIn0=