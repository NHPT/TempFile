LuaQ               Ε   %  Η  Ζΐ HD    ΘΔ   HE " β  Ϋ ΔΐAΑ ΐCΒΐΒΔ β ΩC   Α ΐCΒΐΒ β Ω    [	 FEΓΫ 
bE^D  ώΐ D  Α   A Ε b "   ΐ D  Α   A E b "  [ DDΔ  E DEE"   ΐ Δ Α E A  b "    Gΐ Δ Α E A  b  ΘΕ ’ "  Ϋ  ΘΔΐ Δ Α  E A  b "   ΙΙΔID ΐΘ"D ΐ Δ Α 
 A E
 b  Θ
 ’ "  [  ΘDΐ Δ ΑΔ
  A E b "   ΔI
 Θ "D ΒΛBLΐ Δ Α   A Ε b  Θ ’ "  Ϋ !  Δ!D  Δ!  ΔΔΙΔΙΐ Δ Α   A E b  Θ ’ "   !Δ  !   MΓΞΟΐ Δ Α  E A  b  ΘΕ ’ "  [ DΙDΙΐ Δ Α   A E b "   ΠΓΠ#  D   
   taboption    general    Value    device 
   translate    Modem device    rmempty     nixio    fs    glob    /dev/tty*S*    /dev/tts/*    value 	   username    PAP/CHAP username 	   password    PAP/CHAP password    luci    model    network 	   has_ipv6 	   advanced    Flag    ipv6 (   Enable IPv6 negotiation on the PPP link    default 	   disabled    defaultroute    Use default gateway -   If unchecked, no default route is configured    enabled    metric    Use gateway metric    placeholder    0 	   datatype 	   uinteger    depends    peerdns #   Use DNS servers advertised by peer >   If unchecked, the advertised DNS server addresses are ignored    DynamicList    dns    Use custom DNS servers        ipaddr    cast    string    _keepalive_failure    LCP echo failure threshold Z   Presume peer to be dead after given amount of LCP echo failures, use 0 to ignore failures 	   cfgvalue    write    remove    _keepalive_interval    LCP echo interval n   Send LCP echo requests at the given interval in seconds, only effective in conjunction with failure threshold    5    min(1)    demand    Inactivity timeout Y   Close inactive connection after the given amount of seconds, use 0 to persist connection    mtu    Override MTU    1500 
   max(1500)        U   Z           @@ H  ’    ΐΦ  ΐ Α  AA "A     δ  γ   #        m    get 
   keepalive 	    	   tonumber    match    ^(%d+)[ ,]+%d+                     \   \         #                          ]   ]         #                          g   l           @@ H  ’     Φ  ΐ@Α  AA "δ   γ   #        m    get 
   keepalive 	    	   tonumber    match    ^%d+[ ,]+(%d+)                     n   w    %   Α   
  A@ "β  Ω@    Θ    [ " A    Α   A   ΐ AA FΑΫ Β E Ϋ _B RBbA AA FAΒΫ Β bA #  
   	   tonumber 
   formvalue 	    	   	      m    set 
   keepalive    %d %d    del                             