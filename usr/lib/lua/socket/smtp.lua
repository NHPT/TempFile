LuaQ                     A@    b @  ÈÀ  ¢ Á@   â A  HA " AA   b A  ÈÁ ¢ ÁA   â B  HB " A Â bB HB B HÂ B HB B @ÂD b YB    HÂ B H BB EB    DÂÅá   ÂÂÅáB  ÂÂÅá  ÂÂÅáÂ  ÂÂÅá ÂÂÅáB ÂÂÅá   ÂÂÅáÂ   ÂÂÅá ÂÂÅáB   ÂÂÅá       Â¡Â        Â ¡      È	 !C       G¡      áÃ             !       aD       a        ¡Ä      á   	   ÂD	 ÀÉ!E â Â #  '      _G    require 
   coroutine    string    math    os    socket 
   socket.tp    ltn12    mime    module    socket.smtp    TIMEOUT 	<      SERVER 
   localhost    PORT 	      DOMAIN    getenv    SERVER_NAME    ZONE    -0000    __index    greet    mail    rcpt    data    quit    close    login    plain 	   starttls    auth    send    open 	       message    protect        *   .        @ À@@ ÆÀHÁ  â ¢@   @ À@@ Æ ÁHA A    â  ¢@     ÀAÈ   @ @A@ FÀÈÁ  b"  ¤   £   #  	      try    tp    check    2..    command    EHLO    DOMAIN    skip 	                       0   3         @ À@@ ÆÀHÁ   Û Áâ  ¢@   @ À@@ Æ@ÁH â ¤   £   #        try    tp    command    MAIL    FROM:    check    2..                     5   8         @ À@@ ÆÀHÁ   Û Áâ  ¢@   @ À@@ Æ@ÁH â ¤   £   #        try    tp    command    RCPT    TO:    check    2..                     :   @     !   À @  A@ @Á  "â@  À @  A@ AA "â@  À @  A@ A Û " â@  À @  A@ ÁA "â@  À @  A@ AA "ä   ã   #  
      try    tp    command    DATA    check    3..    source    send    
.
    2..                     B   E        @ @ @@ @Á  ¢ b@  @ @ @@  AA ¢ d   c   #        try    tp    command    QUIT    check    2..                     G   I        @ @ F@À d  c   #        tp    close                     K   R    -   À @  A@ @Á  È " â@  À @  A@ AA "â@  À @  A@ @  ÁAÛ ¢ "  â@  À @  A@ AA "â@  À @  A@ @  ÁAÛ ¢ "  â@  À @  A@ AA "ä   ã   #  	      try    tp    command    AUTH    LOGIN    check    3..    b64    2..                     T   X    	   È   
   A@H   È   W" ×  Á@ @A FAÁÈ b "A   Á@ @A FÁÁÈ b$  #  #  	      PLAIN     b64         try    tp    command    AUTH    check    2..                     Z   a     #   À @  A@ @Á  "â@  À @  A@ AA "â@  À @  A@ A" â@  À @  A@ @Á "â@  À @  A@ AA "â@  Æ B [  ä  ã   #  	      try    tp    command 	   STARTTLS    check    2..    wrap    EHLO    login                     c   n    2   Y   @ @  @   # 
   A@[  "  @Á@  Û $ #  @
   A@[ "  @AA  Û $ #   
   A@[ "  @ÁA  Û $ #  À  B GA "A#  
   	      find    AUTH[^
]+LOGIN    login    AUTH[^
]+PLAIN    plain 	   STARTTLS 	   starttls    try    authentication not supported                     q   {    
#    @  AÀ ¢@   @ÀÀÀ ¢  A   @AÀÀÀ ¢  ÆÁ@ [ âA  þ À@  ÁÀ ¢@A 
  ÁA B@ÁÁ  AB¢ "  @Â ¢@ #        mail    from    type    rcpt    table    ipairs    data    source    chain    stuff    step                     }       	   Ê   À À
  A@ZA    A  A   Á  Á  "â  
  AAEA  DÁ "J  @ÁÁ¡    b A# #        try    connect    SERVER    PORT    TIMEOUT    setmetatable    tp    newtry                   
    @ "@ #        close                                        	   E       @Ú@    Û  ¢  Ê ÀAÀâ D   þc  #        pairs    lower                                
    @    
   @@ H    À@È  ¢ Ê À@Á HÁ â
  $ #   #     	      format    %s%05d==%05u    date    %d%m%Y%H%M%S    random 	    	                         ¦       H      @@Û   ¢ @Û  [   Û WÀ  Àý  À@Û  ¢@ #        
    pairs    :     yield                     ©   Â    I   J   b   À @ Ù@    Å   ¢ À@@Ù@    È  ÀÀ@@Á  [  ×ÀÊ   â@ À@A ÀÁÙ    Ê ÀÀÁ AA  Aâ@ Ê ÀÀÁ â@ Ê  À@Â AA â @
 ÂAH  È WÂ"B 
["B Þ  ÀüÊ ÀÀÁ [ Á â@ À@A À ÃÙ    Ê ÀÀÁ AA  Câ@ Ê ÀÀÁ â@ #        headers    content-type    multipart/mixed    ; boundary="    "    body 	   preamble    yield    
    ipairs    
--    --

 	   epilogue                     Å   Ò    "   J    @ @       b @À @      D  Û  ¢@ À@ ¢À Ù   @
  AG"A@ý   
  A[ "A û   û#        headers    content-type !   text/plain; charset="iso-8859-1"    body    yield                     Õ   Ý       J    @ @       b @À @      D  Û  ¢@   À@À A ¢@ #        headers    content-type !   text/plain; charset="iso-8859-1"    yield    body                     à   ä       J   @ À @@ b À À J     b@  J   @ À @@ b ÀÀ À J     b@  J    b@ #        type    body    table 	   function                     ç   ï       J    @ b @À @     @@È  ¢ ÀÀ@ Ù@    Á  À D@Á @  @   ADD Âc  #  	      headers    date    !%a, %d %b %Y %H:%M:%S     zone    ZONE 	   x-mailer 	   _VERSION    mime-version    1.0                     ñ   ú       J      b @ J  @@À ¡   
     b ¡@  
    £  #        headers    create        ô   ô        
   J  "@ #                          õ   ù        
     @ J  "    À Û   ã  Ç  ã #        resume                                 ÿ          A   @@ À@  Á@ b  Á  AA ¢ÆÁ @ÁA B Û â@Æ@Â [  â@ÆÂ â@ ÆÀÂ ä  ã   #        open    server    port    create    greet    domain    auth    user 	   password    send    quit    close                             