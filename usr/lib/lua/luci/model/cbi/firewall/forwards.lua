LuaQ               n      H@  " A     b   Θ@  HΑ " A  b ’  ΐ  ΐ  BΑ H  ΘA ’ ’  @ @ ΐC@ @D@ @D@ @Δ@ ΐ@E  β ΐ @  Ζ@ α   ΐ@ α@     ΐ @ α  ΐ Η Α@ A A  b ’@  ‘ΐ    α    !A   AA FΘΑA Β A B b b  BΑ AΑ DADAΑ DΙAΑ ‘      DAA FΘΑA 	 A Β	 b b  B	 A	 DADA	 DΚA	 ‘Α   D@AΚ A Α
  HΒ
 " b  DΛAΑ  c #  -      require    luci.dispatcher    luci.tools.firewall    m    Map 	   firewall 
   translate    Firewall - Port Forwards    Port forwarding allows remote computers on the Internet to 
	           connect to a specific computer or service within the 
	           private LAN.    s    section    TypedSection 	   redirect    Port Forwards 	   template    cbi/tblsection 
   addremove 
   anonymous 	   sortable    extedit 
   build_url #   admin/network/firewall/forwards/%s    template_addremove    firewall/cbi_addforward    create    parse    filter 	   opt_name    DummyValue    Name    match    option    Match    rawhtml    width    50% 	   cfgvalue    dest    Forward to    40%    opt_enabled    Flag    Enable    1%        #   <     e      @@  ’Α   Ζ@ΐHΑ  β  A@ "A  FAΐΘA b  A@ ’Α  ΖAΐHΒ β  B@ "M@Βΐ Ω   ΐΩ  @AΒ @Γ  Ϋ bB @BC FΓΑ Γ H bB@BC FΓΑ C ZC   H bB@BC FΓΑ Γ ZC   H bB@BC FΓΑ C M@Β@ ZC  H bB@BC FΓΑ Γ [bB@BC FΓΑ  [bB@BC FΓΑ C [ bB@BC FΓΑ  [ bBM@Β@ GB #        m 
   formvalue    _newfwd.name    _newfwd.proto    _newfwd.extzone    _newfwd.extport    _newfwd.intzone    _newfwd.intaddr    _newfwd.intport    other    created    TypedSection    create    map    set    target    DNAT    src    wan    dest    lan    proto    all 
   src_dport    dest_ip 
   dest_port    name                     >   F         @@Ϋ   %  ’@       @ΐ   A@A ’@ΐ  B@BΚ   ΐΒΑ A  β ’@  #        TypedSection    parse    created    m    uci    save 	   firewall    luci    http 	   redirect 
   build_url     admin/network/firewall/redirect                     H   J         @ @@ H  ’ ΐ@  @    £  #        map    get    target    SNAT                     P   V    
     Α@    β 
   Α@@A FAΑΫ  b A AA HΒ ’ "  A     @  £  #  	      %s-%s 
   translate    IPv4 
   fmt_proto    map    get    proto 
   icmp_type    TCP+UDP                     X   e    H       @ΐ@@ Ζΐ[ Α  β  HA " ’  Κ   ΐΑ A@ @ ΘΑ " A  b β  
   AB@A@ FΐΫ  b "  J  @ΑΒA@ @ H ’ b    Y   A Θ [  Ϋ€ £  ΐA  @ Y  @A ΘΑ [ B   €£  @A Θ [ € £  #     	   fmt_zone    map    get    src 
   translate 	   any zone    fmt_ip    src_ip 	   any host 	   fmt_port 	   src_port    fmt_mac    src_mac    translatef $   From %s in %s with source %s and %s    From %s in %s with source %s    From %s in %s                     g   p    "       @ΐ@@ Ζΐ[ Α  β  HA " ’  Κ   ΐΑ A@ @ ΘΑ " β  Ω    HA  Ϋ$ #    H  $#  #        fmt_ip    map    get    src_dip 
   translate    any router IP 	   fmt_port 
   src_dport    translatef    Via %s at %s    Via %s                     u   {         Κ     [ β
 [   "J   Ϋ b@   £  #     "   <small>%s<br />%s<br />%s</small>                            
9       @ΐ@@ Ζΐ[ Α  β  HA " ’  Κ   ΐΑ A@ @ ΘΑ " A  b β  
   AB@A@ FΐΫ  b "  A  ΐ
   AB@A@ FΐΫ Β b "    ΐA A Ϋ [ dc  @A  Ϋ d c  #     	   fmt_zone    map    get    dest 
   translate 	   any zone    fmt_ip    dest_ip 	   any host 	   fmt_port 
   dest_port 
   src_dport    translatef    %s, %s in %s 	   %s in %s                             