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
                delay : 2000
            };
            opts = $.extend(options, opts);
            if(!opts.obj){
                return;
            }
            $(opts.obj).html(opts.msg).show(opts.ease);
            setTimeout(function(){
                $(opts.obj).fadeOut();
                if(typeof opts.fn == 'function'){ opts.fn(); }
            },opts.delay);
        }

        function validatorForm(form){
            var form = $(form),
                eles = form.find('[valid]'),
                msg = {},
                isValid = true;
            eles.each(function(k, v){
                var valid = JSON.parse($(v).attr('valid').replace(/([^:,{}]+)/g,'\"$1\"'));    //"{reg:^\d+$}".replace(/([^{}:,]+)/g,'\"$1\"');
                if(JSON.parse(valid.require.toLowerCase()) && /^\s*$/.test($(v).val())){
                    msg[v.name] = valid.requireMsg || "required";
                    isValid = false;
                }else if(JSON.parse(valid.reg.toLowerCase())){
                    var reg = new RegExp(valid.reg);
                    if(!reg.test($(v).val())){
                       msg[v.name] = valid.regMsg || v.name + "does not match the reg";
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

