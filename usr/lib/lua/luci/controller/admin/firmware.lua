LuaQ               ,�     H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� A �� b� � �� �� �  �  HB "� A �� b� � �� �� �  �  HC "� A �� b� � �� �� �  �  HD "� @�E b�� � �� �� ��HE �� � �D    ��� ��E � "� E    �E F��E � b� YE    �H� � �E � H� �	 �F	 �	 H�	 �
 �GJȇ
 �� �
 �G��
 �  HH �� �� 	 a	  �I     �I ��  �� ��  �� �	 �	 �I �I �� �� �� �� �	   �	 �I    ��I ��   
�� ��     �� �	 �	 �I �I ��    � �   � �      �� ��    � �     �     ��� �	     �	 �I     �  �I ��       
 �   �     ��� ��  � �  
 �
�� �	  ��	 �I  ��I �� �� ��  � ��� �	  ��	 �I  � ��I �� �� ��  �     ��� �	 �	 �I    �     � ��I �� �� �� �� �	    �     �	 �I � !�    �   � �J !
	  �  � !J	 � !�	    �
  

 !�	      � �    	    J !

 � !J
   � !�
      � � �
 !�
 J !
   � !J    � �      	� !� 
 !�   J 
 E� �J  �� ��
�D����J  �� ��
�D����J  �� ��
�D�
���  �� ��
��JY�D����J  �
 ��
�D�
��J  �� ��
�D���J
�E�  �J  �� ��
�D����J  �� ��
�D�
���  �� ��
��JY�D���J
�E
 �J  �� ��
�D����J  �
 ��
�D�
��J  �
 ��
�D�����  �J ��
��JY�D�
�J��E�  �J  �� ��
�D�����  �J ��
��JY�D�
�J��E�  �J  �� ��
�D�����  �� ��
��JY�D�
�J
�E�  �J  �
 ��
�D�����  �J ��
��JY�D�
�J��E�  �J  �
 ��
�D����J  �� ��
�D����J  �
 ��
�D�
�J
�E�  �J  �� ��
�D����J  �� ��
�D�
��J  �J ��
�D���J��a
  � �  B
 aJ  � �     � �  
         � �   �BJ a� B� # � w      module    luci.controller.admin.firmware    package    seeall    require    luci.model.uci 
   luci.http    luci.tools.debug 	   luci.sys    nixio    luci.model.controller    luci.fs    luci.sys.config $   luci.controller.admin.cloud_account    luci.model.log 
   luci.util    luci.model.fmup    luci.model.crypto    tmpv2    luci.controller.admin.onemesh    luci.model.one_mesh    luci.model.easy_mesh    cursor 
   luci.json    get_profile    global 
   small_mem    no    reboot_time 	K      upgrade_time 	x      /tmp/firmware.bin    /tmp/cloud_up.bin    /tmp/read-backup-userconf.bin $   /tmp/read-backup-userconf-merge.bin    /tmp/portal_logo.jpg    /tmp/portal_back.jpg    /storage/portal_logo_user.jpg    /storage/portal_back_user.jpg    os    execute 7   nvrammanager -s | grep default-config2 >/dev/null 2>&1 4   nvrammanager -s | grep user-config2 >/dev/null 2>&1    /tmp/firmware_lock.lua 	    	  	  	     fork_reboot    file_flash    update_fwuppercent    update_rebootflag    restore_error    make_common_config    set_common_config    find_default_ip 
   hide_info    config_read    config_check    md5_product_name    md5_product_info    config_backup    config_restore    config_reboot    fork_reboot_withled    config_factory    upgrade_read    upgrade_write    auto_upgrade_read_pre    auto_upgrade_read    auto_upgrade_write    tmp_auto_upgrade_read    tmp_auto_upgrade_write    set_download_inf    get_upgrade_detail    upgrade_fwup_check    upgrade_firmware 
   utfstrlen    GetShortName    tmp_get_firmware_info    fw_check_loop    fw_upgrade    tmp_upgrade_firmware    tmp_get_upgrade_info    slave_get_info_onemesh    slave_get_info_easymesh    slave_get_info    slave_upgrade_firmware_onemesh     slave_upgrade_firmware_easymesh    slave_upgrade_firmware    slave_get_upgrade_info_onemesh     slave_get_upgrade_info_easymesh    slave_get_upgrade_info    config    read    cb    check    backup    restore    own_response    reboot    factory    config_multipart    upgrade    write    fwup_check 	   firmware    save_upgrade    auto_upgrade    tmp_auto_upgrade    tmp_cmd    get_firmware_info    get_upgrade_info 
   slave_cmd 	   dispatch    _index    index 3       4   P     N   H   �@  ��  ��� [� A�@ �@ ���� H�  M� ���A��� "��M �@�G �� �� [  ���� [�M@���M��@��A � G��  �C[ ��"���A� @���� bĀ� 	[�M@�@�M����A� @���� b���	�D BD A� ��b� � ��  ��M �@ ���� ��   �@H� �� W��"A �  # �       /tmp/partition.txt 	       os    execute    nvrammanager -s >     io    open    r     read    *line    string    find    (.-),()    size%s*=%s*(.-)%s*Bytes    gfind    size    _ 	   tonumber    rm                      R   [           H@  "� E@  D�@��   � A��� �@A� H�  �� �@    ���  D� ���A �  �@ �@B Ȁ �@ c  # �       require 	   luci.sys    reboot_time 	K      cursor    get_profile    global 
   fork_call    sync 
   fork_exec    sleep 2;reboot                     ]   b     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w )   check_status = {totaltime=%d, ops="%s"}
    write    string    format    close                     d   i     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w '   check_status = {percent=%d, ops="%s"}
    write    string    format    close                     k   p     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/reboot_flag.lua    w &   check_status = {reboot=%d, ops="%s"}
    write    string    format    close                     r   w     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w ,   check_status = {error_code="%s", ops="%s"}
    write    string    format    close                     y   �         �  @@��@�A  @@� �� �� b���  �   � ���A� [��� � � W��A���  ��� � �@ # �       image_boot    0    device_mode    router    io    open     /tmp/save-backup-commonconf.bin    w    pairs    write    =         close                     �   �      3       @@ H�  ��  "��F A �@ b����A �@ �� � B� � A ����� � �� H�  M�B� �M C  ��� M@� �M��� �M��  ��@   ADH� � �� W��"A   ADH ���� W��"A   ADHA "A # �       io    open     /tmp/read-backup-commonconf.bin    r    read    *all    close    string    match    image_boot=(%d)     device_mode=(%a+)     0    1    router    ap 	   repeater    os    execute    nvram set image_boot=     >/dev/null 2>&1    nvram set device_mode=    nvram commit >/dev/null 2>&1                     �   �     
4      A@H�  "A 
   �@H �A "A��  �AHA � "��FABȁ b�� �F�BbA A  @A�� bA H@ �� A @A��  �� � [ �A�b�� ��� B� H� �  A @A����� � [ �A�b�� ��� B� �  # �       os    execute J   nvrammanager -r /tmp/default-config.bin -p default-config >/dev/null 2>&1    dec_file_entry    /tmp/default-config.bin    /tmp/default-config.xml    io    open    r    read    *all    close F   rm -f /tmp/default-config.xml /tmp/default-config.bin >/dev/null 2>&1    <interface name="lan">    </interface>    _    string    find    (.-) 	   <ipaddr> 
   </ipaddr>                     �   �    
5   J   @ � �   �@  b@�A�  @�� @ � �@ b@ J � @�� �@  �� b@�E  �  �@ _@ �� � � � ����  ������ [ B�A ��  ����  ��@� A�  �@ � � �@CȀ A  �@��   ��C�@    �@���  ��@� A�  �@ # �       dec_file_entry    /tmp/tmp-backup-userconf.xml    luci    sys    exec    mkdir -p /tmp/backupcfg 
   xmlToFile    /tmp/backupcfg    accountmgnt    cloud_config    ipairs    rm -f /tmp/backupcfg/config/ P   rm -f /tmp/backup/ori-backup-user-config.bin;rm -f /tmp/tmp-backup-userconf.xml    convertFileToXml    /tmp/backupcfg/config    enc_file_entry 9   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf.xml                     �   �       E@  �   D� �c  # �    
   totaltime                     �   �    +   �   �@@��@��  �@ �   � A�@AȀ �� �   ���� Ȁ �@ A  �   � A�@A� � �� �    ��� � � �@ �@ D������ �B@��  �@CȀ �@ �   ��� � �@ �� � �  c  # �       luci    http    prepare_content 
   text/html    fs    access    /tmp/firmware_status.lua    dofile    check_status    upgrade_type    ops    restore    os    execute /   rm -f /tmp/firmware_status.lua >/dev/null 2>&1    error_code                     �   �      $      H@  "� @�@ ��  b� Y@    �H  �@ ��A��  ����@B[� �@�ƀB�@ �� � ��@�� � �  C ACH� "A   AD[��� $�#  # �       require    luci.sys.config    getsysinfo    product_name        io    open    /tmp/product_name    w    write    close    luci    sys    exec    md5sum /tmp/product_name    rm -f /tmp/product_name    string    match 
   %x%x%x%x+                     �   �      +      H@  "� @�@ ��  b� ��@ �  �� ��@ A � W�� �@�   ��� �� � �A H�  ��� "A��"A A  �C �CH "� AA @��@���A bA A� @��� � d�c  # �       require    luci.sys.config    getsysinfo    product_name    product_ver    special_id        io    open    /tmp/product_info    w    write    close    luci    sys    exec    md5sum /tmp/product_info    rm -f /tmp/product_info    string    match 
   %x%x%x%x+                     �   �  	 |  J    � �c�J �  �  c�A@  @�� @�� �  b@ A@  @�� @�� �@ b@ J  F�� ��  b� Y@    �G � M@� @��@  ��@��@Ȁ � H� �� � ����@ �@ �@� �  ��A� H� �� �@    ��  M D��� ��@�� H� �@��@  ������ �@ �  �@�� H� �@��  � H �@ A [�"��AB  @��@���� � ��bB �  ��A   �@ �@H� "A 
  GHA �� "A�
� �GH� �� "A�A   �@ �@H� "A �  �@�� H�    AHH� �� "��G�M@�  �� �AH�	 � HB	 �A�� ���[ � �AHȁ	 � ���� �A��	 H
 ⁀B���
 "��FBJȂ
 b��� M@� � ��B�H�
 ₀���BJH�
 ₀�
  KHC ���� ��"�  A�
 @��C ƃKH� ��b�  � M@� ����
 ��D F���� b��  ����
 ��D F�K�� b��  �� "D����"D�M@� � ��� "D����"D�D�"D DL"D M@� @ �D�"D DL"D D�"D D   �@ �@H� "� A�
 @��� � b��� �DH	�D 
 �����
 ���	 H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   �M@�  ���
 ���	 H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   ��L	[ �D��L	[��D�M@� � ��L	[ �D��L	[��D��DL	�D �  %  �D   ��	�N
�� H "�  EO
H� "� M@� ��AE  @��
@��
�� �� F	 �bE AE  @��
@��
� bE AE  @��
@��
�E bE # �D�
� �P
H� "� AE  @��
@�
�E ȅ bE�AE  @��
@��
� bE AE  @E�
@��
@��
� 
�E  �����bE�M@� ��AE  @��
@��
�� �� F	 �bE AE  @��
@��
� bE AE  @��
@��
�E bE @9�A  b�� �  �@H�@ 
 �����
 ���� H� � � ��  ��L��
 �BN��� "B  �@   ��@L�@ �  ƀ�H� � � �@    �� �M@� �
  �S[��� "���    ATH� "A A [�"��M@B �J��� � ��bB H � �B	 W�B  ��@��@�B �H� � � ��B � ��U���� �VM@V@ ��V ���� ��� ��B �  ��A   �@ �@H "A � HA "A   ATH� "A A   �@ �@H� "A  �A   �@ �@H "A 
� ADHA �� "A�A   �@ �@H "A 
  AEH� �� "A� H� � A AA � b���B  ��@��@Ȃ ����B ^�  ��AA  @��@���� bA J @��A ȁ bA�J�@���� �A bA�AA  @��@��� bA A   �@ �@HA "A 
� �GH� �� "A�  e  A  @�N�� �A � b� @A�� b� �A  ��@��@�A �A c �	�J�@��� b� �A  ��P�Q�A � J @��� b� � �B[Ȃ � B  ��A��A  ��P��Q� �A �A  �AR��R��R��B   �P L�A��A  ��@��@�A �A I � c  # � o   	       luci    sys    exec O   nvrammanager -r /tmp/save-backup-userconf1.bin -p user-config1 >/dev/null 2>&1 O   nvrammanager -r /tmp/save-backup-userconf2.bin -p user-config2 >/dev/null 2>&1    get_profile    backup_restore    extern_partition  "   nvrammanager -r /tmp/save-backup- 	   .bin -p      >/dev/null 2>&1    make_common_config    cloud    cloud_support    no    dec_file_entry    /tmp/save-backup-userconf1.bin    /tmp/tmp-backup-userconf1.xml    mkdir -p /tmp/backupcfg 
   xmlToFile    /tmp/backupcfg    accountmgnt    cloud_config    ipairs    rm -f /tmp/backupcfg/config/ I   rm -f /tmp/save-backup-userconf1.bin;rm -f /tmp/tmp-backup-userconf1.xml    convertFileToXml    /tmp/backupcfg/config    enc_file_entry :   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf1.xml    io    open    r    /tmp/save-backup-userconf2.bin    /tmp/save-backup-    .bin     /tmp/save-backup-commonconf.bin )   /tmp/save-backup-userconf-temp-merge.bin    w    read    *all    string    format    %08x    seek    end    write    close 0   md5sum /tmp/save-backup-userconf-temp-merge.bin    match 
   %x%x%x%x+ $   /tmp/save-backup-userconf-merge.bin    gmatch    %x%x    0x    char 	      require    popen (   cat /tmp/save-backup-userconf-merge.bin    rm -f /tmp/save-backup- p   rm -f /tmp/save-backup-userconf1.bin;rm -f /tmp/save-backup-userconf2.bin;rm -f /tmp/save-backup-commonconf.bin Y   rm -f /tmp/save-backup-userconf-temp-merge.bin;rm -f /tmp/save-backup-userconf-merge.bin    ltn12_popen    http    header    Content-Disposition "   attachment; filename="config.bin"    prepare_content    application/octet-stream    ltn12    pump    all    md5_product_info    /tmp/product_info_md5_file    split         os    execute "   mkdir /tmp/backup >/dev/null 2>&1     -----------------------backup :    /tmp/backup/ori-backup-    nvrammanager -r      -p     stat    size    router-config 
   ap-config 
   hide_info V   nvrammanager -r /tmp/backup/ori-backup-user-config.bin -p user-config >/dev/null 2>&1 '   /tmp/backup/ori-backup-user-config.bin F   tar -cf /tmp/ori-backup-userconf.bin -C /tmp/backup . >/dev/null 2>&1 #   rm -rf /tmp/backup >/dev/null 2>&1 L   nvrammanager -r /tmp/ori-backup-userconf.bin -p user-config >/dev/null 2>&1    /tmp/ori-backup-userconf.bin    /tmp/tmp-backup-userconf.xml F   rm -f /tmp/ori-backup-userconf.bin;rm -f /tmp/tmp-backup-userconf.xml 9   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf.xml [   cat /tmp/product_info_md5_file /tmp/ori-backup-userconf.bin > /tmp/mid-backup-userconf.bin    /tmp/mid-backup-userconf.bin    /tmp/save-backup-userconf.bin "   cat /tmp/save-backup-userconf.bin �   rm -f /tmp/save-backup-userconf.bin; rm -f /tmp/product_info_md5_file; rm -f /tmp/mid-backup-userconf.bin; rm -f /tmp/ori-backup-userconf.bin (   attachment; filename="backup-%s-%s.bin"    getsysinfo    product_name    date 	   %Y-%m-%d                     �  G  	 '  A   @@� @�� ��  b@ J    � ���J �  �  ��A@ @�� �� �  b���@� � ����@� H� �@��  
 C�A ȁ "� A    � M�C@ ��    ��@ �  �F�� bA A  @��@��A bA A� �� � bA�I� c E  �A ȁ B �A���� C ���� �B�� A @��� b �  �CFD���� �AH���� �� � [ B�   HB �� �B ]B�F�� �C b��� �CGȃ   �G[�" ��  � �C���\�A @B�� b� �� �� ����� ��M�C@�  HC �� �C ]C�F�� �D b��� �DG	Ȅ   �G
[�" ��  � �D�	��	\�A @C�� b� �� �� ����� �   HC �� �C ]C�F�� �D b��� �DG	Ȅ   �G
[�" ��  � �D�	��	\�A @C�� b� �� �� ����� �  D H	 �D D��� �E "��A @E�
�� � ��� 
� b�  ���EF�C�  DH[�"� G�M�C ������	��	Q�	� ��ā���	Q�	@ ����DI	Ȅ	 �D  ����DI	��	 �D ��� �D �  ��D	�E	�D �D �� ��  �D��� � ��� ������� [ ℀ 
M�C� �F�� ��b���
F�� � b����� �E �E ��A�
 F
 ����E ����
 HF
 ⅀ M�C@�AF @����
 �F
 b���AF @��� �F
 b���F ��A�F G
 ���M ���M�C	@�ƆK[ 	�F�ƆK[ 	�F�M A��M��	@�Ɔ�[�	�F�ƆK[�	�F�M�C@�M ���M�C
@�ƆK[ 
�F�ƆK[ 
�F�M A��M��
@�Ɔ�[�
�F�ƆK[�
�F�ƆD�F Ɔ��F M�C@ �ƆD�F Ɔ��F ƆD�F �  ������ �   L[��G "��  �J�@G��� bG ��J�@G��� bG A  @��@�� bG M�C �A  @��@��G bG A  @��@��� bG A� �� � bG�I� c A� @��G bG M ��%�M�C	 %�J @���
 �� bG�A  @��@�� bG J�@G��� ȇ bG�A  @��@��� bG A  @��@�� bG J @���G ȇ bG�J�@���� � bG�A  @��@��G bG E �� �� _G � ������  �����I [	 �� �	�H ��  @�����R� � �G�� �GS�� 
 �G��  ��D�Eȇ �G �G ��A��  �����FH� ⇀ � �ƇD�G ������ HH �G��  ������ �G ���G�� �G @	�ƇD�G �  ������ �G �  ����� �G M�C ��  �����H �G �  ������ �G ���G� �G �� � H �G��� ��H �G �� � �  ������ �G �  ������ �G  �A  @��@��� bG M A �M��	��A  @��@�� bG A  @��@��G bG  �A  @��@�� bG M�C �M ���M�C
 �A  @��@��� � � �bG A  @��@�� � � �bG ��A  @��@��� � � �bG AG bG� A  @��@�� bG M�C �A  @��@��G bG A  @��@��� bG  g�J ��� b@ J  F � ��  b� Y@    �H@ � �A  �AH� � "��FABȁ b����D�A  ����  ��D�E�� �A �� ��  �A��� � � ��� �A ⁀ 
  �NH� �� "B�B  �AH� � "��A  @��@��� bB E  �B �	 C ����FD ����C �ƃD�C �  ������ �C �� � H �C��� � � �C�� A @��� b �  �DFD��B�� �BH���� ƂD�B M�@ ��� ����B�� �B �����B�� �B �  ������ �B �� � H �B��� � �  ����� �B �  ������ �B �� ��C �B � ��HC �� � �B    ���M�� �
�HC "C 
  �Z[��� "��� �  NH "C �  NHC "C  [�"��M�C@�AD @���� � � �	� bĀM��������	� [ �� �
� �@�	� ���	 H� � � 
 [�	"� � ���L �@ �@� ��J��� � ��bE A  @��
@�
�� � � �bE A  @��
@�
�� �  [ �� ��bE  �J��E � � [��� � 
��bE A  @��
@�
�� � � �bE �  @�
  �NH �C "C� �
  �NH� �C "C�   �D EH "C 
� COHC �� "C�   �D EH� "C    �D EH� "C 
  �NH  �C  "C�
� �PHC  � "C�   �D EH�  "C  H� �� C A � b���  ��D	�E	�D �H�  �D�	�D ^�  @�J�@��� �C bC�J @C��C ȃ bC�A  @��@��� bC J�@��� b� �@�J �! b� � �L �� �M@�  �� ��A  @��@��C! bC J�@C���! bC A� �� � bC�A� @��C bC I� c AC @���C � b������ ��� T������C ����P�C D �C��  ��D�E��! �C �  ��D�E�" �C �  ��D�E�C! �C ���CI�C" �C  �����C �  ��D�E�C! �C ���CIȃ! �C �� ��  �C��� �N�C �C �� � A   @�� @�� ��" b@ J �@@� � # b@ A@# b@� I � c  # � �      luci    http    prepare_content 
   text/html 	       io    open $   /tmp/read-backup-userconf-merge.bin    r    seek    end    set    get_profile    backup_restore    extern_partition  	    	      close    sys    exec *   rm -f /tmp/read-backup-userconf-merge.bin    restore_error    err_failed    restore 	   	      read    string    format    %02x    byte    table    concat 	   tonumber    0x 	      printf    length check success    length check failed    /tmp/read-backup-userconf1.bin    w    /tmp/read-backup-userconf2.bin $   /tmp/read-backup-externpartconf.bin     /tmp/read-backup-commonconf.bin )   /tmp/read-backup-userconf-temp-merge.bin    write 0   md5sum /tmp/read-backup-userconf-temp-merge.bin    match 
   %x%x%x%x+    md5 check success    md5 check failed p   rm -f /tmp/read-backup-userconf1.bin;rm -f /tmp/read-backup-userconf2.bin;rm -f /tmp/read-backup-commonconf.bin *   rm -f /tmp/read-backup-externpartconf.bin Y   rm -f /tmp/read-backup-userconf-temp-merge.bin;rm -f /tmp/read-backup-userconf-merge.bin    os    execute "   touch /var/run/reset_factory.lock    dec_file_entry    /tmp/read-backup-userconf1.xml )   mkdir -p /tmp/restorecfg /tmp/userconfig    restoreXmlToFile    /tmp/restorecfg J   rm -f /tmp/read-backup-userconf1.bin;rm -f /tmp/read-backup-userconf1.xml G   nvrammanager -r /tmp/ori-userconf1.bin -p user-config1 >/dev/null 2>&1    /tmp/ori-userconf1.bin    /tmp/ori-userconf1.xml 
   xmlToFile    /tmp/userconfig :   rm -f /tmp/ori-userconf1.bin;rm -f /tmp/ori-userconf1.xml    accountmgnt    cloud_config    ipairs    cp -f /tmp/userconfig/config/      /tmp/restorecfg/config/    convertFileToXml    /tmp/restorecfg/config    enc_file_entry .   rm -rf /tmp/restorecfg;rm -rf /tmp/userconfig 	      <?xml     /tmp %   rm -f /tmp/read-backup-userconf1.xml    decrypt userconfig1 success    decrypt userconfig1 failed "   rm -f /var/run/reset_factory.lock 0   nvrammanager -e -p user-config1 >/dev/null 2>&1 O   nvrammanager -w /tmp/read-backup-userconf1.bin -p user-config1 >/dev/null 2>&1 0   nvrammanager -e -p user-config2 >/dev/null 2>&1 O   nvrammanager -w /tmp/read-backup-userconf2.bin -p user-config2 >/dev/null 2>&1    nvrammanager -e -p      >/dev/null 2>&1 8   nvrammanager -w /tmp/read-backup-externpartconf.bin -p     set_common_config *   --------------config_restore-------------    global    userconf_size_check    yes    /tmp/read-backup-userconf.bin $   rm -f /tmp/read-backup-userconf.bin    md5_product_info    md5_product_name    /tmp/tmp-backup-userconf.bin #   rm -f /tmp/tmp-backup-userconf.bin R   dd if=/tmp/tmp-backup-userconf.bin of=/tmp/read-backup-userconf.bin ibs=1 skip=16 -   --------------extern partitions-------------    split      #   mkdir /tmp/restore >/dev/null 2>&1 F   tar -xf /tmp/read-backup-userconf.bin -C /tmp/restore >/dev/null 2>&1    /tmp/restore/ori-backup-    .bin    stat    size    gsub    %-    %%-    no #   --------------restore------------- )   nvrammanager -w /tmp/restore/ori-backup- 	   .bin -p     --------------erase:    , filesize=    , max_size= (   /tmp/restore/ori-backup-user-config.bin    /tmp/ori-backup-userconf.xml #   rm -f /tmp/ori-backup-userconf.xml E   nvrammanager -r /tmp/ori-userconf.bin -p user-config >/dev/null 2>&1    /tmp/ori-userconf.bin    /tmp/ori-userconf.xml 8   rm -f /tmp/ori-userconf.bin;rm -f /tmp/ori-userconf.xml       /tmp/restorecfg/config/    user%-config _   rm -rf /tmp/ori-backup-userconf.xml /tmp/restore /tmp/read-backup-userconf.bin >/dev/null 2>&1    decrypt userconfig failed /   nvrammanager -e -p user-config >/dev/null 2>&1 M   nvrammanager -w /tmp/read-backup-userconf.bin -p user-config >/dev/null 2>&1    decrypt userconfig success    call ,   [ -f /sbin/board_restore ] && board_restore 
   reboot...    fork_reboot                     I  S      J   @ � �@  b@ A�  ��  b� @ � b�� � � �@A��A�� �� �   � �� � A �@��� �@� � � �  # �       printf 
   reboot...    require    luci.model.uci    cursor    fs    access    /etc/config/history_list    commit    history_list    fork_reboot                     V  l    @      H@  "� E@  D�@��   � A��� �@A� H�  �� �@    ���  D� ���A �  �@ � � �@AA H� �� � � ���H � �A  �@    �� ��C@��  D ADH� "A @��   ���� �
  EHA "A �  D ADH� "A �  D ADH� "A  F HA "A c  # �       require 	   luci.sys    reboot_time 	K      cursor    get_profile    global 
   fork_call    sync    lp5523    message    get    system 	   hostname    chip-on    luci    sys    exec 1   ubus send leds '{"action" : "3","status" : "1"}'    Archer_Air_R5    printf (   Air R5 need turn off WAN orange led!!!!    ledcli WAN0_OFF    ledcli STATUS_SAN 
   fork_exec    sleep 2;reboot                     n  E  	 }  J   @ � �@  b@ A�  @�� �  b@ A@ �� b� @�� b�� �@ �  �� � �	� G��AB��� � F�� ��  HC b��YB    �G���� � H �� ����B    ��� Ƃ� H� � � ₀�B    ��� �� �C �C � "��C    ��  E� �A�  @���C bC �E @ �� � ��M�E  �@�E  �@ �� �   ��   V M@�� �@�F@��@�F��J  @C��� ��bC���@�A @C�@���� bC @�A	 � b� M�� �A	 ��b� ��� �J� @C�bC� AC �� b� @��b�� [ �F�� ��  H� b���B�  ��� F�� ��  H b���B�  ��� F�� ��  HD b��[�A	 � b� M�� �A	 ��b� ����Y  @ �	  ��A�	 � b� �� �V M@�@ � �F@�A�	 � b� M��  �     �	  G��� D
 H�
 �� �C    ���
  K��ƃ� HD �� �� ⃀ZC�  �H� �	 �� [�� 
 HD �C�������C� � @�����@�� ���  ���� �C �� H �D � �C    ���M�� �
  �M[��� "���  [�" �M�E
��A�  @��
�E � 
� �bE �   �  DH �HH� "D   DH �HH "D   DH �HHD "D 
� �O"D� D H� "�  �A"�� [  �� �  DH �HH� "D � �� � � [ "D � �� �  [�"D Y  @�� �� � E [�"D D� �� "D����G@�� �� �  H� "D Y  ��� �� � E [�"D � � �P[���"D�D� �� "D� K��Q��� �D Ȅ � A ��b "D  D� �D "D�� �D Ȅ "� D    ��
  K��J  @��� bD A @D�@��D ��� �	bD A @D�@��D � � �	bD ��@�G��� �S	�D � ���[ 	Y   ����� �D����D J  @��D bD A� d� c  # � S      printf    reset to factory config    os    execute "   touch /var/run/reset_factory.lock    require    luci.model.uci    cursor    luci.model.accountmgnt    get_cloudAccount    get    cloud_config    device_status 
   accountid    bind_status    0    need_unbind    sysmode    mode    router 	   repeater    killall tdpServer     all    true 	    	   	   username 	   password    print    complete_flag:     luci    sys    call 0   cp /etc/config/accountmgnt /tmp/accountmgnt_bak 	   tonumber    cloud_unbind    type    table    get_profile    ifttt    ifttt_support    no    yes    ifttt_trigger    ifttt_config    factory_id    file_flash    factory    resetconfig 0   nvrammanager -e -p user-config2 >/dev/null 2>&1    backup_restore    extern_partition    split         ipairs    nvrammanager -e -p      >/dev/null 2>&1 !   /etc/init.d/logd stop ; logreset ,   [ -f /sbin/board_factory ] && board_factory $   [ -f /sbin/mcu_reset ] && mcu_reset    reloadconfig 0   cp /tmp/accountmgnt_bak /etc/config/accountmgnt    set    commit    1    set_cloudAccount 	   tostring    portal    portal_support $   support portal and rm nandflash jpg    exec    rm -r     io    open    /tmp/reset_factory_status    w    write    close 
   reboot...    fork_reboot_withled                     G  Y   
R   A   �@  b� �� �   ��� � �� ��   ���� � �����   ��� � A A� @���  ��@� �� �A � b� �� ׀������ � �@�H� �� ��  M �� ��   @ ��@  � � �� �� � �@�H� �� �A  M �� ��   @ ��@  � � �����  �� �� ������ � �@�H� �� ��   ���
� F�� ȁ � HB "A 
� �F�� "A��  # �       require    luci.model.accountmgnt    model    getsysinfo    product_name    hardware_version    HARDVERSION    firmware_version    SOFTVERSION    (    string    sub    special_id 	   	      )    is_default    get    quicksetup    to_show    true 	   upgraded 
   totaltime    upgradetime    set    false    commit                     [  c      J   F � �@  A  H�  b��Y@    �G � ��@ M�� ���   ��@A  HA  ��  ��@ �@ �   � AA  �@�� � �  # �       get    quicksetup 	   upgraded    set    commit                     e  l    !   �  J   F@� Ȁ  �  H  b��Y@    �H  @ �J   F@� Ȁ  �  HA b��Y@    �H� @��J   F@� Ȁ  �  H� b��Y@    �H  @��#  # � 	      enable    get    auto_upgrade    upgrade    off    time    03:00    delay    0                     n  u           "�� #  # �       auto_upgrade_read_pre                     w  �   �   J   F � �@  �  b� Y@    �H�  �    � @��   �@�HA  �� ��  �@    ��  A [�"� M�B����
  �B�A  � � [ "A 
  AC�A  "A���   
  �C� �A � @�D YB    �@��"A 
  �C� �A � @�D YB    �@��"A 
  AC� "A�
�  EHA "A 
  AA�� ��  "��A    �A @�D YA    �@���� �M@F���  ��C� H� � �B �A �  �AC� �A��� � �� �  
  BA�B �� � "��B    �� J  FB��B � H� b���� �E� �B �G��Y   �����āF��BH���B �  ��CC H� �� ȃ �B �  �BCC �B��� �� �  # � "      get_profile 
   telemetry    support    no    yes    get    cloud_info    auto_fw_collect_flag 	    	   tonumber 	      section    global    commit    auto_upgrade_read_pre    set    auto_upgrade    upgrade    enable    time 
   fork_exec !   /etc/init.d/auto_upgrade restart    system    ntp    type    auto    on    require    luci.controller.admin.wireless    wireless_schedule    off    enable_byts .   env -i /etc/init.d/sysntpd restart >/dev/null    wireless_schedule_set_all                     �  �       �  J   F@� Ȁ  �  H  b��Y@    �H  @ �J   F@� Ȁ  �  H� b��Y@    �H� @��#  # �       enable    get    auto_upgrade    upgrade    off    updateTime    time    3                     �  �   j   A   b�� �   �@@�  H�  � �A �A    ��� �@ �   �@@�  H�  �A ��A �A    ���� �@ �   ��A�  �@�� � � B�@ �@ �   ��B� H �A ����@    ��� � A �@    �� � �� �M�C��
  A@�� � B H� "A 
  �A�� "A� HA "� E  �  ��B� HB  � ����A    ��� �  Ɓ�H� �B  � ⁀
�  BHB "B �D���   �����D�C� �E[�"B 
  B@�� �B   H� "B 
  �A�� "B�  $� #  # �       tmp_auto_upgrade_read    set    auto_upgrade    upgrade    enable    time    updateTime    commit 
   fork_exec !   /etc/init.d/auto_upgrade restart    get    system    ntp    type    auto    on    require    luci.controller.admin.wireless    wireless_schedule    off    enable_byts .   env -i /etc/init.d/sysntpd restart >/dev/null    wireless_schedule_set_all                     �  �    8   A   �@  b� @�� b�� ��  �   �� � � ��@� � H� �@ �@� � H �@ �@� � H� �� �@��@� � H �� �@��@�  HA �� �� �@ �@�  HA � �A �@ �@� � H� �� �A �@ �@� � H� � �A �@ �@� � �@�# �       require    luci.model.uci    cursor 	   tonumber 	d      delete    cloud_config    new_firmware    upgrade_info    set    cloud_push    cloud_reply    wportal    upgrade    enable    yes    time    0    info 
   show_flag    tcsp_status    commit                     �     i   �   �@  �� ��@  �  F�� B E  b��� �  Ɓ�H� � � B M��@����A � �B bB��C� �I  �� c�J� @�@B��� b� Y   �A� �� bB A  � �I� � c�J� @�@B��B b� Y  @�A� �B bB A @��B� A �� b� @�� �[� � c���@�   ��A� �B �� bB�J @��B bB J @��� bB [� � c�@�J @��� bB  � �J�@B��� bB � �J�@B��� bB I  �� c�# � $      require    ubus    connect    nvram_ubus    call    getFwupPercent    get_profile    lp5523    message 	       percent    update_fwuppercent    flash 	       err_failed    fs    access    /tmp/firmware_status.lua    dofile    check_status    /tmp/reboot_flag.lua    flag    reboot 	   tonumber 	   	d      update_rebootflag    printf    upgrade true 
   reboot...    upgrade false    chip-on 
   fork_exec 1   ubus send leds '{"action" : "3","status" : "8"}'    ledcli STATUS_ON                              A   � � d  c   # �       get_upgrade_detail                       B   @   J   @ � �@  b@ J � F�� ��   b� �@ ��A��A�  �@ �  �@B��B� ��� �    ��  �@B��B� ���  C@ ��   �  �    ��@C��@ ��   �  �  ���
�� M��@�	  # �� �  �� ��@DȀ �@ � �� ��@D�� �@ �   � @�  �@ � � �  # �       printf    upgrade firmware...    get_profile    lp5523    message    luci    http    prepare_content 
   text/html    fs    access    stat     size 	       upd_fm    chip-on 
   fork_exec 1   ubus send leds '{"action" : "3","status" : "8"}'    ledcli STATUS_ON    false                     D  V    !   V   � � �    H  �A  ȁ  �  H �B A M @@�A� @���  � b��� ���  ����@�@ ���@ ��B@�� ����  # � 	   	    	�   	�   	�   	�   	�      string    byte 	                       X  �    k   M @ @ � �   �# � �     E  ���A   @  ���� �  [ ��  ��  CA[���"��HC   ��� ��A@ �H�   � ��� � B@ �HC �� �� ��B@ �H�   � �� �@C@ �H� �� ��� � D@ �HC  � �� ��D  �H � @��@�� �C��[��D���@	� ���C����@��������� ����[ �C��� ��� H�  �C����� @� H�  ��  ���  ���� �C��@  �� ��CQ������ �B �#  # �     	    	   	      string    byte 	   	�   	�   	   	�   	�   	�   	�   	   	�   	�   	   	�   	�   	      sub    table    insert        ...                     �  �   �   A   �@@ b� ��  ��  �� �   � �A [� A�@ �� ���   � �� �@ � � � �A �@ �   
  �B"�� A�  �� b� �A�ȁ �� �A    ��� Ā��AD� H� � ����A    ��� Ā����C���A�� �� �A    ��� Ā��A�� �� �A    ��� Ā���  �Aȁ  B����A �AD� H� �� ����A    ��� �  HB ⁀��������� � ����ADH� �� �� ⁀�A    �� �����ADH� �� Ȃ ⁀�A    �� ������HH	 �B	 � �A    �ȁ	 BD�� ��  "��B    �� E  �� ��BD	 H
 �C
 ����B    ���
 �   � M����D���D���  � �M�C  �D�A��BKH	 �� �
 ��B ��KH	 �B��  # � 0   	   tonumber    needToCheck    require $   luci.controller.admin.cloud_account    printf    needToCheck: 	      do cloud_getFwList    call    cloud_getFwList    cursor    luci.sys.config    name    getsysinfo    product_name        version    get    cloud_config    upgrade_info    SOFTVERSION    current_version    data.current_version     release_log    GetShortName 	      releaseNote    bin 
   b64encode 	   isLatest    new_firmware    fw_new_notify    0    upgradeLevel    type    get_profile 
   telemetry    support    no    yes    cloud_info    collect_flag 	       is_find_fw 
   is_new_fw    section    global    commit                     �  �       A   �@  b� ��� �   �� �@  ����  � �A �@ Ȁ 	  � ���A	� � �# �       require $   luci.controller.admin.cloud_account    get_download_detail    os    execute    rm -f /tmp/firmware_lock.lua 	       percent                     �  �    	   �     �� �  [ ��  � � �# �       get_upgrade_detail                     �  �    K   
     @ H@  ��  "��   ��J   @�� �   �   � �b@�J   @�� �   �   �@�b@�J   @�� �   �   ���b@�F�A b� @ �@ �F@B b@ H� � � � � ��� �@ �  	  �� �  [ �@C  �# � �� � � ��� �� � ��� �@  �� � ��� �@  �� � ��� �@ � �� �
 � @�@ �	  # 	� # # �       open 
   /dev/null    w+    dup    stderr    stdout    stdin    fileno 	      close    0    call    sleep 3  	   tonumber 	d      upd_fm                                 H@  "� @�@ b�� @ �� �I   �  c �@@A �   b� � � ��A��� �A@ ��  �@� � � � � �# � 	      require $   luci.controller.admin.cloud_account     cloud_fw_upgrade    illegel download url    get_download_progress    fork 	       fw_check_loop                                  H@  "� @�@ b�� �� @ ��   �  �  � � �   # �       require $   luci.controller.admin.cloud_account    check_internet     fw_upgrade                       A    
9      H@  "� H�  ��  �    A I  "A  ���A  �A� ����H�  ��  � �A�� �A  ��A  �A� ����H  ��  � �A�� �A  �H@ ��  �A� � ��� 
   D BD[�"�     �H� �@��Ā �
� � ��
 � ��  # �       require $   luci.controller.admin.cloud_account    idle    0    get_download_detail 	   tonumber    percent 	       os    execute    rm -f /tmp/firmware_lock.lua 	d      fail    downloading 	   tostring    /tmp/auto_update_lock.lua    fs    access 
   upgrading    status    process    upgradeTime    rebootTime                     C  �    �      H   �   �@@��� ��   � M� �@�@ ��   @ ��@  � � �  �   � � � B�M�A�� B�M�A � �@B@� ��M�B  �@�
�  C@B�"� @BC��CY  ���  @��� 
  �C@�� �� �[�� "��FCDb� YC  @�ƃD�C �� ��  �C ���C�� �C ��EJ �D  �DF��� F�FbD F�DbD �C  @�@ �[  @ �ID  I� c M��  ���M �  ���J�@����b� Q � �  �� �D  �D��Ą��D  ����������B	� ��D  ��ǁ@ ��D  �ȁ�D  � ���	���	 E�� �Ą��D  �D��D    ��� �������I	� ��D  �DJ�@ ��D  ��I��D  ���D    ��� ����D  �D��Ą��D  �����@������ �B   �@�ހ  ��#  # � -   	       get_sclient_list_all    table    type    pairs    mac      
   mesh_type    onemesh    device_type    WirelessRouter    master_get_slave_key    tmp_username    tmp_password    tmp_client    ip    connect    close    os    exit 
   fork_exec 6   echo "{\"needToCheck\":true}" > /tmp/firmware_upgrade    request    infile    /tmp/firmware_upgrade    disconnect    decode 	      name    model    Router    RE    releaseNote    bin 
   b64decode    version    current_version    needToUpgrade  
   is_latest    latest_version    printf    usr or pwd is nil                     �  �     	      H@  "� @�@ b@� @�@ d � c   # �       require '   luci.controller.admin.easymesh_network    easymesh_firmware_info_get #   firmware_info_read_from_controller                     �  �    	      A   b�� �@  ��� Y@  @ ��   [ � � �@  @ ��   � ���   � � �  �@�ހ  ���   � �  �@ #  # �       slave_get_info_onemesh    slave_get_info_easymesh    pairs 	   
   dumptable                     �  �   C   �   � @�   �� �@@ �@J� @��� ����bA J� @���A � ��bA �   �
�  @
�I� � ��A��  I� ���� �����A�� �A  @�FBbB AB @���� bB J�@��B bB F�C� C  ćb� �BD�B �B�B YB  @��� ���� �B �  � c I  c # �       master_get_slave_key    tmp_username    tmp_password    print    usr     pwd     tmp_client    connect    close    os    exit 	    
   fork_exec     echo "" > /tmp/firmware_upgrade    request    infile    /tmp/firmware_upgrade    disconnect    status is nil                     �  �       �   �@  �� ��@  �  �   # �       require '   luci.controller.admin.easymesh_network    easymesh_upgrade_firmware                     �  �   B   @ @ Y   � �@ @ @� @�J   @�� ��  b@ I   c  @ A Y   � �@ A @� @�J   @�� �@ b@ I   c  A� �� b� � � ��� �@    ��   �@ � [ "@�@@ �@��@ ���B@ ��  �� �@�A @@ �A $�#  ����@�� @@ �A $�#  � �
   DHA "A # �       mac        printf    mac is nil    ip 
   ip is nil    require    luci.model.easy_mesh    get_sclient_list_all    none    pairs 
   mesh_type    onemesh    slave_upgrade_firmware_onemesh 	   easymesh     slave_upgrade_firmware_easymesh    print    Mesh dev not found.                     �  3   �   �   � @�   �� �@@ �@�   �#�  @#�I� �� ��@��  I� ���� ����A�� �A  @�FBAbB A� @��� bB J @B��� bB F�B��C  CC�b� ƂC�B �BA�B YB  @�@ ��� @ ��B  �� � M@���� �B�� [�C�B @�� �B�� �B @ ��� @ ��B  �� � M����� �B� [ C�B � �� �B�C �B �������  [�"�  �� �
  CF[�"C � �
  CDH� "C � @��C�� �� G �� �ǎ
  CFA� "C � # �� ���G � �@H �� �ȍ� @����Q��NC�C��@ �� �ǎ
  CFA� "C � # ��� @����Q��NC�C��
  CFA� "C � # # � &      master_get_slave_key    tmp_username    tmp_password    tmp_client    connect    close    os    exit 	    
   fork_exec     echo "" > /tmp/firmware_upgrade    request    infile    /tmp/firmware_upgrade    disconnect    data     printf    [TPIPF] re_data is     [TPIPF] re_data is nil    [TPIPF] re_msg is     [TPIPF] re_msg is nil    decode    table    type 
   dumptable    **********    status    fail    time        downloading    downloadProcess 	d   
   upgrading    upgradeTime    rebootTime 	�                      5  ]    D   �   �@  �� ��  ���  � �@�� ���A  �@ ��A   �  � � � BA    �  @�Y  � �@�@A�YA    �HA ���  @��� ������� �A    ��� � B E  DC�D���@�@ �D�C� ��� � � �M C� �D�� @ ���   � ��  �DC�@�  �D�D�c # �       require '   luci.controller.admin.easymesh_network    os    time 	   	    %   easymesh_firmware_upgrade_status_get -   firmware_upgrade_status_read_from_controller    status    process 	   tonumber 	�      fail 	      downloading    ipairs 	   	d   
   upgrading                     _  {   C   E   � @ �   � �� @ @@@��   ��@��  �@ �   �  � A �   � �� A @@@��   ��@�@ �@ �   �  �� �� �� � B  �@    ��   A A� ��b@��@ ���@ � ��@ �^�  �� C@�AA �@ �A d�c  ���C@�A� �@ �A d�c  � �J  @��A bA # �       mac        printf    mac is nil    ip 
   ip is nil    require    luci.model.easy_mesh    get_sclient_list_all    none    pairs 
   mesh_type    onemesh    slave_get_upgrade_info_onemesh 	   easymesh     slave_get_upgrade_info_easymesh    print    Mesh dev not found.                     �  �      a   
   � � � @�    EA  DA���  �   # �    	   dispatch 
   post_hook        �  �         ��� � �   � ��   �@@� � �@ � � �  # �       cmd 
   fork_exec                                 �      S   
    @ �@  Ȁ  "� @    ��  Q A Q@� Q�� Q�� �  �  J  F��A B b� YA    �H� �  �@B H� �� �A    �� �  ��HB �B � �A    �ȁ 	� I� � �� �� � �� � �� ���� � � �BD��D�     �
    
 � � �
  
 � �
  
 �
    
 �
  
 �
  
 �
 �  �   �B � ��D� � �  # �       get_profile    firmware_upgrade    upgrade_flash_size 	   	   	   	   	   	       mini_mem_upgrade    no    upgrade_min_free_mem 	 x     upgrade_need_free_mem 	 �  	   tonumber    luci    http    setfilehandler    _index 	   dispatch        �     �   �    � �� � @�@���  ��� �@ �  ���� � �@ �  A � �@ �@ 
� ����  �@�� �@ �   � ����@ 
�� ���@ 
  ����  �@�� �@ � �� ��@� � ��  �@�A �@ �   �   �  ���� �@ ��  ��� �@ � ��@  @
��  
 HA �@�    ���D ��@�� �� ��@�
 � �@  @�� ����� �@ �  � ���� � �@��   �� �� �� �@ ��  	� ��@ ���
�H�  � ��  � �	� ��   @
�Y   �	�� �	� � �� �	� �	
 
 ���� � � �� �� �[� �@���� �
� � �� ��@��@ ��  ���� J�A�@ �@ ���
�H�  � ��� � �
��  ��� �@ � ��    ��   � �� ��@��@ # � !      yes    os    execute "   echo 3 > /proc/sys/vm/drop_caches    cur_free_mem    exec 4   cat /proc/meminfo | grep MemFree | awk '{print $2}' 	   tonumber    printf    free_mem is too small! &   free_mem is small, need to clean mem!    clean_mem_for_download    free_mem is enough! 
   fork_exec ,   /usr/sbin/manual_fw_download_monitor 5 60 5    file_flash    upload    name    image    fs    access    upgrade_type    local 	       io    open    w    write    close    rm -f  	      rm -f /tmp/firmware_lock.lua                                              E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin 	   firmware    call    _index    leaf                             