LuaQ               �     H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� A �� b� ������ �CHB �� �� ⁀�A    �� C�B Ȃ C "��B    � F�D��  b� YB    �H ��DC H� �� �B    �� �  �� �B     � �B C E�  ��� ��D���D�ǎ�� Ń  �CH���H��C� D���C�E ���C	 ��D���D�ǎD�I�� ��  �J��CJ���J��  K�DK��K�E�  D�K�DL�DDL���  ��L���L��M���  �DM�ĄM���M��  N�EN��N�E�  D�N�DO�DEO���  ��O���O��P���  �EP�ąP���P��  Q�FK�E�  DFQ�D�Q���  ��Q��R��C D���C�E�  ��ȃ ��D���D�Ҏ� ��  �S��CS���S�D T�DT��S��T��T�E�  DU�DDU�D�S���  ��U���U���S�ń  �V��DV��  �V��V��C D���C��E�  ���C ��D���D�ǎ�� Ń  ăW���W��C� D���C�E�  ���C ��D���D�ǎ� Ń  ăX���X��  Y�DY��C D���C�E�  ��ȃ ��D���D�ǎ�� Ń  ��Y��Z��C� D�����  ��  �H D���ăǎ� E�  DDH�D�H�D� ������� �HD	 D���ăǎ��I� E�  DJ�DDJ�D�J���  �K��DK���K���  ��K��L��DL��  �L��L�M�E�  DEM�D�M�D�M���  �N��EN���N�Ņ  �EQ�ąQ��  �Q�R�D ��������  �H� D�����Ҏ E�  DS�DDS�D�S��D �T��DT���S���T���T���  �U��DU���S��  �U��U��S�EE  DV���  ��V���V�D ����Ã��C  �  [��� W��D���ҎE ��  �S��DS���S��D �T��DT���S�ĄT���T��  U�EU��S�E�  D�U�D�U�D�S���  �V��EV�Ņ  ąV���V�_D D�����!�   �   � �    D !�       � � � � �       � !  �� !D  � !�    D !� �  E�  �D  �D ���D����D  �� ���D��D��E�  �D  �� ���D����D  � ���D��D��ED  �D  �D ���D��D��ED  �D  �� ���D��D�a     B� aD   B� a� B # � u      module "   luci.controller.admin.quick_setup    package    seeall    require 	   luci.sys 
   luci.util    luci.model.controller    luci.tools.debug    luci.controller.locale    luci.model.uci    cursor    get    profile    profile_diff    dslite_support    no    v6plus_support    get_profile    firmware_upgrade    auto_update_support    switch    dup_lanwan_enable    updateonly_and_prefix    get_wire_type    luci.controller.admin    time    controller    .timesetting    target 	   dispatch    forms    form 	   settings    prefix    time_    network 	   .network 
   limit_key    network_conntype    wan_ipv4_status 	   network_    limit    status    wan_ipv4_dynamic    network_dhcp_    dhcp    wan_ipv4_staticip    network_static_    static    wan_ipv4_pppoe    network_pppoe_    pppoe    wan_ipv4_l2tp    network_l2tp_    l2tp    wan_ipv4_pptp    network_pptp_    pptp    wan_ipv4_dslite    network_dslite_    dslite    wan_ipv4_v6plus    network_v6plus_    v6plus    wan_ipv4_ocn    network_ocn_    ocn    mac_clone_advanced    wan_ipv4_preisp    network_preisp_    wan_port_status    network_port_ 	   wireless 
   .wireless    wireless_dispatch    wireless_2g    wireless_2g_    gather    wireless_5g    wireless_5g_    wireless_5g_region_enable    on    wireless_5g_2    wireless_5g_2_    wireless_6g    wireless_6g_    smart_connect    smart_connect_    region    region_    iptv    .iptv    setting    isp_special_    modem 
   .usbmodem 	   modemset 
   usbmodem_    working_mode_set    working_mode_ 
   .firmware    auto_upgrade    auto_upgrade_    read    write    read_ap 	   write_ap    check_internet    check_router    quick_setup    cb 	   ap_setup    .super    _index    index           %        �@    ��   �   ��A  [�" �[ � W���� ���   �@��  [� "� �[ ��W�� ��  @�# �           ipairs    pairs                     '   0        
     @ H@  "� A�  ��  b� @ � b�� �@ � � � ����A �����A �� �� �A    ��A � ��  ���  �  # � 
      getenv    REMOTE_ADDR    require    luci.model.client_mgmt    get_client_list    ipairs    ip 
   wire_type    wired 	   wireless                     �   �    V   E   �@  ��� D� �� � �   �� ���  � �
� J �@��@ 
� � @�� @��"� @� BAB � b� ��  �@ �	B  	�   ��AB ���b 
���@C� ���M�@  �@���M�C� ����C� �� M�@  �����@D� ���M�@  � ���  �������D��  �  �  @�D [� ������"D   ��   ^�   �ހ  ���    �� � �  # �    
   wire_type    get_wire_type    yes    table    insert    pairs    require    controller    target    type 	   function    forms    limit    dslite    v6plus    ocn    form    wan_port_status 
   operation    read    success    updateonly_and_prefix    data    prefix                     �   O  
 3  E   � � � � @ @@@ ��     �� � 
 �@ ��   A[���"A� AA A    �� A� � b� @A�b�� ���� H �� �A    ��A �@@�Ɓ�H� �� � � ��� ��C H�  "B ���� "B�Ɓ�H� � � �A    ��A ����B @�E "�   ��  B��AB ��E b� B�FB��� � H� � bB F��� bB�B [�"�1�A� ��Gb� ��G@��B� A �� b� @�@ �A� @ �IC  I� B� �H �@�G� �� ��M��@�@�G� �	 ���� �J�@C���	 bC  )�A� Y  @(�E�  �  D���DCJ��  �C  �J�@� ��	 K
� �
 M�@
  ��� ��	M@K
� � ��	�K
� �
�M�@
  � ��A@� �GJ �� W��
@
�� ��	 L
 �
� EI
HE "E  � ��	�L
� �
 M�@
  �@� ��	E    � �L@��	 �
  � 
@��	��
  � 
  � �@��	� ��
��@E�	M��
 
�E�  ���	D���DEJ��� �E   ����M�G�	���"��  @ �D��  ޅ  @�M�N@����	M��� ����	 �@��� �
�  F�  @�� [� ����F�	"F @��   ���� @������ �E@���	D�AE �  b����M G�	�����    �DC^�  ��ރ  ���M���� ��  D�  �� @��" �AE ��Jb������
� ��� ��  ���F�^�  ���   �  ��   �  @�B��� ��  "��B    �B �Q��J�@��� bB J�@���B bB Z   �[� c # � J   	   ismobile 	      yes    table    insert    working_mode_wan_3g4g_switch    cable    require    luci.model.uci    cursor    get_profile    region    support_please_select    no 
   get_first    system    set    quicksetup    commit 
   telemetry    support 	   tonumber    is_set_each_band_separately    collect_flag    is_set_each    section    global    quicksetup_info    commit_without_write_flash    pairs    target    controller    type 	   function    3g4g 	   .network    .iptv    print    just continue    form 
   operation    write    forms    limit    dslite    v6plus    ocn 
   .usbmodem 	   modemset    cable mode skip usbmode    wan_port_status 
   limit_key    wan_ipv4_preisp    gather    match 	   ^%s(.*)$    prefix     wan_ipv4_v6plus    wan_ipv4_ocn    success    updateonly_and_prefix    data    ipairs    get 
   bluetooth    B1    enable    donot_support    on 
   fork_exec    /etc/rc.d/S49bluetooth stop    /etc/init.d/bluetopia stop                     Q  l   6   E   �@  ��� D� �� � ��  
  � @	��  @�"� @B� BA� � b� ��  �@ �	B  	�   ��A�  ��b ���  �C��Ã���B��  �  �  @�D [� ������"D   ��   ^�   �ހ  ���    �� � �  # �    
   wire_type    get_wire_type    pairs    require    controller    target    type 	   function    forms    form 
   operation    read    success    updateonly_and_prefix    data    prefix                     n  �   �   E   � � �   A  � ���  ��� �A "� A    �� �A@�F��A B G b� ���B [��� �� �A ��B �A�AA �  b���  ����� ������� � �� �� @D@ ��� @ ��B  �� �� �� �  ����  �  ����ŉ�  C @C�"��@�EYD    �@��Y  � ���E�D �	@��FM@F	����  ��D����ŉ�D   ����F�G����"��    ���ބ  ����  	�  E�	  @�� [� ���	�G"E @��   ���� ��D��D��	��	 �D��	�D �  ���ƅ�
@GRF��⅀�    ����
��  ���  @�@���� [ "� @CGY  ��AC ��Db ��D �D������D��� ��� � @�G�E���  ��^�   �  ��   ^�  ��Z   �[� c # � "      require    luci.model.uci    cursor    get_profile    region    support_please_select    no    yes 
   get_first    system    set    quicksetup    commit    pairs    target    controller    type 	   function    form 
   operation    write    forms 
   limit_key    limit    gather    match 	   ^%s(.*)$    prefix    success    updateonly_and_prefix    data 	      ipairs                     �  �   	   H   �@  Ȁ   H  � ��  ��� � [ �@ �@ �@�� ��  ���B �A �@�M@ �  ��@  � � �  # �    	   	   	       call    online-test    sleep 2                     �  �    %   A   �@  b� @�� b�� �   ��  �� � A��� �@AH� �� �  @����� ���� �A � ��� �� � �  @ ��   �  ��� � M �  ��@  � � �  # �       require    luci.model.internet 	   Internet    luci.model.uci    cursor    get    modem 
   modemconf    mode    3g4g    luci    sys    call O   ubus call network.interface.mobile status | grep state |grep -w -q 'connected' 	       status 
   connected                             J   @ � � � �   d �c   # �    	   dispatch                              
     @ A@  $  #   # �       _index 	   dispatch                                  E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin    quick_setup    call    _index    leaf                             