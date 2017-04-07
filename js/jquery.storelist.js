/* 
Edited by Wesley Wang.
if any problems please email to : whiskywosky@gmail.com
Thanks a lot.
*/


(function($) {

    $.fn.storelist = function(settings) {

        var distArr = [];
        var storeArr = [];
        var self = this;

        var defaultSettings = {
            path : '',
            loadDone : function(){},
            initDone : function(){},
            error: function(error){}
        };
        
        if(typeof settings == "string"){
            settings = {path : settings};
        }
        
        defaultSettings = $.extend(defaultSettings, settings);
        
        return this.each(function() {
            
            $.ajax({
                type: "GET",
                url: defaultSettings.path,
                dataType: "xml",
                error: function(xhr, status, error){
                    
                    defaultSettings.error(error);
                    
                },
                success: function (xml) {

                    defaultSettings.loadDone();

                    $(xml).find('store district').each(function () {
                        distArr.push($(this).text());
                    });

                    $(xml).find('store').each(function () {
                        var temObj= {
                            district : $(this).find('district').text(),
                            name : $(this).find('name').text(),
                            tel : $(this).find('tel').text(),
                            addr : $(this).find('addr').text()
                        };
                        storeArr.push(temObj);
                    });

                    $(xml).find('store').promise().done(function(){

                        distArr = distArr.filter(function(elem, index, self) {
                            return index == self.indexOf(elem);
                        });
                        
                        for(var i = 0 ; i < distArr.length ; i++){

                            self.append(
                                "<section>\
                                    <h2>" + distArr[i] + "</h2>\
                                    <ul></ul>\
                                </section>"
                            );

                            for(var j = 0 ; j < storeArr.length ; j++){

                                if(storeArr[j].district === distArr[i]){

                                    self.find('ul').eq(i).append(
                                        "<li>\
                                            <span title='" + storeArr[j].tel + " " + storeArr[j].addr + "'>\
                                            " + storeArr[j].name + "\
                                            </span>\
                                        </li>"
                                    );

                                }

                            }

                        }

                        defaultSettings.initDone();

                    });
                }
            });

        });

    };

    return this;

}) (jQuery)


