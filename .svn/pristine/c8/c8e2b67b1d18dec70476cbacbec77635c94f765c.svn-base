$(function(){
        $('#productCatagoryList>ul>li').bind('mouseover', function(){
                var index = $('#productCatagoryList>ul>li').index($(this));
                $(this).addClass('curCatagory').siblings().removeClass('curCatagory');
                $('#childCatagoryList>ul>li').removeClass('curChild').eq(index).addClass('curChild');
                $('#childCatagoryList').show().css('top',$(this).outerHeight()*index + 30);
        });
        $('.productCatagory').bind('mouseout', function(e){
                 if(!$(e.relatedTarget).is('#childCatagoryList') && $(e.relatedTarget).parents('#childCatagoryList').length <=0){
                         $('#childCatagoryList').hide();
                        $('#productCatagoryList>ul>li').removeClass('curCatagory');
                 }
        });

        function shortFormMsg(opts){
            var options = {
                obj : null,
                msg : '',
                ease : null,  //show 'ease-in' 1000
                fn : function(){},
                delay : 2000,
                afterHide : true
            };
            opts = $.extend(options, opts);
            if(!opts.obj){
                return;
            }
            $(opts.obj).html(opts.msg).show(opts.ease);
            if(typeof opts.fn == 'function'){ opts.fn(); };
            if(opts.afterHide){
                 setTimeout(function(){
                    $(opts.obj).fadeOut();
                },opts.delay);
            }

        }

        function validatorForm(form){
            // use ag :{require:true,reg:^\\d+$,regMsg:用户名格式不对,requireMsg:用户名必填}
            var form = $(form),
                eles = form.find('[valid]'),
                msg = {},
                isValid = true;
            eles.each(function(k, v){
                var valid = JSON.parse($(v).attr('valid').replace(/([^:,{}]+)/g,'\"$1\"'));    //"{reg:^\d+$}".replace(/([^{}:,]+)/g,'\"$1\"');
                if(JSON.parse(valid.require.toLowerCase()) && /^\s*$/.test($(v).val())){
                    msg[v.name] = valid.requireMsg || "required";
                    isValid = false;
                }else if(valid.reg){
                    var reg = new RegExp(valid.reg);
                    if(!reg.test($(v).val())){
                       msg[v.name] = valid.regMsg || v.name + "does not match the reg";
                       isValid = false;
                    }
                }else if(valid.compare){
                    if(form.find('[name="'+valid.compare+'"]').val() != $(v).val()){
                        msg[v.name] = valid.compareMsg || v.name + "must be equal with compare";
                        isValid = false;
                    }
                }else{
                    //other match
                }
            });
            return {"isValid" : isValid, "msg" : msg};
        }

        window.shortFormMsg = shortFormMsg;
        window.validatorForm = validatorForm;
 });

