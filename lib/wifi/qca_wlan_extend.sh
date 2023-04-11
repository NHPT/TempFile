#!/bin/sh

# Copyright (c) 2021 Shenzhen TP-LINK Technologies Co.Ltd.
#
# yanghuiting@tp-link.com.cn
# 2021-04-06
# Content:
#	Create for qca wireless-script
# 	This is a default extend-script, should be put in /lib/wifi


config_ani_and_dyn_edcca() {
	local vif="$1"

	if [ "$vif" = "${VIF_HOME_2G}" -o "$vif" = "${VIF_BACKHAUL_2G}" ]; then
		# config ANI Desense Level -5~25
		#wifitool "$vif" setUnitTestCmd 67 4 16 0 -5 25
		iwpriv "$vif" ani_def_range -5 25

		# config ANI apply cck ota failed to scale error
		wifitool "$vif" setUnitTestCmd 67 5 16 0 0 0x00880004 0

		# config ANI do not apply dynamic Noise Floor to update EDCCA
		wifitool "$vif" setUnitTestCmd 67 5 16 0 1 1 0

		# config max EDCCA Level 0x26
		#wifitool "$vif" setUnitTestCmd 67 2 16 0x26

		# config ANI enable dynamic EDCCA
		# Dynamic EDCCA does not take effect in ETSI domain
		wifitool "$vif" setUnitTestCmd 67 3 16 0 1
	fi
}

config_enable_rtscts() {
    local vif="$1"
    iwpriv "$vif" enablertscts 0x41
}

