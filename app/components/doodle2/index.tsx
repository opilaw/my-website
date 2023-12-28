"use client"
import { motion, useAnimation,  useScroll,
	useTransform,
	useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";



export default function Doodle2() {
	
  return (
    <>

    <motion.svg className="max-w-lg max-h-max 2xl:max-h-full 2xl:max-w-full 2xl:static flex justify-center align-middle" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="100%" height="100%" viewBox="375 0 800 400" enable-background="new 0 0 2000 2000" >

    <motion.path fill="none" opacity="1.000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.000000"   
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
    transition={{
		repeat: Infinity,
		ease: "easeInOut",
		duration: 6,
		times: [0, 0.16, 0.33, 0.5, 0.66, 0.83],
	}}
	d="
    M657.255737,178.096619 
        C655.330933,176.488907 653.471008,175.526108 651.276611,175.043213 
        C649.398499,174.629929 648.663208,173.109482 648.822876,171.223175 
        C648.963257,169.564072 649.797485,168.300415 651.459167,168.003769 
        C653.393555,167.658447 654.327087,168.884979 655.234314,170.513336 
        C658.488586,176.354401 663.084900,180.261230 670.269592,179.664139 
        C675.338928,179.242889 680.393066,178.639557 686.747498,177.984085 
        C683.120972,175.194321 681.163879,172.451660 677.453430,172.247894 
        C675.390808,172.134628 673.974121,171.105194 673.798401,168.899323 
        C673.645935,166.985596 674.609314,165.615173 676.375793,165.093689 
        C678.676941,164.414368 679.201965,166.489731 680.482056,167.753662 
        C685.515076,172.723297 689.772400,179.339661 698.739868,176.885666 
        C702.220154,175.933258 705.971252,175.970566 710.186401,175.490051 
        C708.652466,172.756348 707.068420,170.976532 704.171143,170.637100 
        C702.044312,170.387939 700.847046,169.133331 700.859680,166.975037 
        C700.870605,165.112366 701.806641,163.682388 703.679016,163.356400 
        C705.939941,162.962769 706.687988,164.487930 707.469360,166.400681 
        C709.584595,171.579056 715.184143,174.945175 720.815674,174.846893 
        C726.145386,174.753891 731.475891,174.709549 736.805420,174.608719 
        C737.060669,174.603897 737.309509,174.259811 737.808838,173.890823 
        C735.783081,171.375198 733.681335,169.253998 730.147217,169.204468 
        C728.229309,169.177597 726.974121,168.159851 726.894775,166.154419 
        C726.823669,164.356277 727.542847,162.812393 729.274292,162.131775 
        C731.137024,161.399536 732.848022,162.366699 733.452698,163.926208 
        C735.212524,168.464920 739.754944,170.193665 742.625000,173.575378 
        C744.145508,175.366943 746.285278,175.598724 748.518433,175.762848 
        C755.705444,176.291031 762.703186,177.809601 769.343811,180.632355 
        C771.809082,181.680267 773.954956,181.903168 776.480896,180.763062 
        C782.447449,178.070038 788.821350,176.379395 795.294006,176.065704 
        C803.484558,175.668747 807.891113,170.381088 812.181396,164.663971 
        C813.459778,162.960464 814.651917,161.324631 816.998901,162.164139 
        C818.775940,162.799805 819.298340,164.438339 819.224365,166.242554 
        C819.139038,168.323532 817.882874,169.137939 815.964844,169.239319 
        C812.545837,169.420029 810.281372,171.367630 807.525818,174.836594 
        C815.605225,174.836594 822.759644,175.430893 829.747559,174.609146 
        C833.806519,174.131821 836.868164,170.494492 838.599548,166.558258 
        C839.424133,164.683624 840.248230,163.174698 842.443665,163.422256 
        C844.381348,163.640778 845.224060,165.071503 845.275696,166.963333 
        C845.335999,169.175171 844.199402,170.497131 842.058350,170.636261 
        C839.152710,170.825073 837.898682,172.957382 835.940979,175.076447 
        C841.827271,176.757126 847.622925,177.672440 852.991760,177.187653 
        C858.170227,176.720032 862.036072,172.052521 865.467651,168.035736 
        C866.781433,166.497894 867.444275,164.384415 869.963013,165.108810 
        C871.522217,165.557251 872.456543,166.879013 872.459534,168.510971 
        C872.464600,171.282257 870.578369,172.010071 868.185120,172.371399 
        C865.089111,172.838837 863.052795,174.984634 861.236511,177.860474 
        C870.165894,177.533173 879.607605,183.861023 887.716431,174.921967 
        C888.933472,173.580338 890.487549,172.668320 890.929443,170.668564 
        C891.318054,168.910187 892.520142,167.675766 894.537292,167.973236 
        C896.202515,168.218781 897.186035,169.301163 897.359375,171.003677 
        C897.569458,173.067627 896.917969,174.767044 894.717285,175.152725 
        C891.580383,175.702469 889.412231,177.614319 886.542847,180.063705 
        C893.035522,180.670685 898.834473,181.736191 904.375183,179.862946 
        C907.248230,178.891602 909.834839,176.606491 910.744080,173.266617 
        C911.218445,171.523926 911.876526,169.972748 914.016602,170.297028 
        C915.481628,170.519012 916.204346,171.723022 916.414368,173.152924 
        C916.683167,174.982635 916.252625,176.528503 914.297485,177.130722 
        C912.861328,177.573090 911.420654,177.898254 910.856323,179.590942 
        C919.735840,181.433456 927.347351,177.369873 930.568176,168.935028 
        C931.256958,167.131287 932.055786,165.930649 934.037598,166.149277 
        C935.496582,166.310226 936.399475,167.408020 936.785217,168.750763 
        C937.319275,170.610001 936.594849,172.208344 934.855713,172.848953 
        C932.284973,173.795822 929.999084,174.898895 928.585632,178.328674 
        C933.951721,177.558228 939.060364,177.768982 943.196472,174.318008 
        C944.795532,172.983871 946.243103,172.178452 948.033813,173.550339 
        C949.369385,174.573532 949.553101,176.129196 949.017334,177.645325 
        C948.234680,179.859787 946.532898,179.637985 944.528259,179.542725 
        C937.827881,179.224365 931.739990,182.011063 924.444946,183.356628 
        C927.629822,186.044601 929.956909,188.178482 933.185974,188.663712 
        C935.450439,189.003998 936.976624,189.859344 937.208313,192.271927 
        C937.365662,193.910492 936.888306,195.343048 935.167297,195.824585 
        C932.781555,196.492096 932.221802,194.382324 931.055481,193.024490 
        C924.309387,185.170731 915.996155,181.871735 905.013916,185.156387 
        C910.116821,188.949051 914.539062,193.260300 920.101624,196.075317 
        C921.849060,196.959595 923.338623,197.777084 923.393494,199.973923 
        C923.428162,201.366211 923.315735,202.748535 921.816589,203.323669 
        C920.197144,203.944992 918.936829,203.288086 917.966797,201.893951 
        C909.761047,190.100876 899.786133,181.713593 883.079895,184.646576 
        C888.871033,188.705292 892.909546,194.042267 899.454102,195.957535 
        C901.834839,196.654266 903.327942,197.821487 903.282227,200.422714 
        C903.252502,202.111145 902.484253,203.428329 900.737854,203.614334 
        C898.317078,203.872192 897.149536,202.337555 896.562073,200.186707 
        C896.091980,198.465805 894.759338,197.457428 893.401062,196.456360 
        C891.255737,194.875153 889.120483,193.277115 887.035889,191.617142 
        C875.335571,182.299973 875.341187,182.292923 858.480347,182.078537 
        C864.803589,186.153320 868.890015,191.882797 875.738098,193.818848 
        C877.608521,194.347641 878.341492,195.774139 878.240479,197.645721 
        C878.162720,199.087570 877.559082,200.274887 876.121033,200.723206 
        C874.409668,201.256683 872.785156,200.355484 872.420837,198.964630 
        C871.269104,194.567352 867.419617,192.960129 864.393799,190.483948 
        C862.588928,189.006912 860.518250,187.783508 858.964905,186.082703 
        C851.867737,178.311554 842.567139,179.767654 833.468750,179.816833 
        C837.668396,182.568680 840.620178,187.105545 846.194641,187.600250 
        C848.485474,187.803558 849.636780,189.636215 849.877380,191.749374 
        C850.064209,193.390457 849.068542,194.667984 847.413635,195.049332 
        C845.264343,195.544632 844.287476,193.963943 842.969788,192.587250 
        C835.872009,185.171387 828.800842,177.637161 817.220642,178.025085 
        C812.282104,178.190536 807.333313,178.052734 802.206116,178.820786 
        C805.927612,181.771194 808.176453,186.545334 813.874084,185.974121 
        C815.670959,185.793976 817.002319,187.021896 817.342651,188.927765 
        C817.562683,190.159988 817.235352,191.277344 816.107239,191.964569 
        C814.429749,192.986526 813.021973,192.488235 811.588562,191.268158 
        C808.295471,188.465164 804.647583,186.031799 801.619934,182.976410 
        C798.135437,179.459930 794.363892,178.639374 789.844543,180.106216 
        C789.532043,180.207657 789.188354,180.218307 788.857544,180.257629 
        C783.036255,180.949387 777.679443,185.593475 772.377319,184.863922 
        C766.914856,184.112305 761.458862,181.256134 755.771484,179.924774 
        C751.692871,178.970016 748.407288,179.435089 745.229004,182.419174 
        C741.721252,185.712540 737.479492,188.169983 734.100281,191.672455 
        C732.937073,192.878098 731.399719,192.936737 729.994324,191.938385 
        C728.947449,191.194687 728.613403,190.063278 728.831909,188.835419 
        C729.129761,187.161774 730.320190,185.800461 731.857849,186.041473 
        C737.704529,186.957901 740.026794,181.787262 743.992004,179.101334 
        C734.116943,179.287277 723.809814,174.641937 714.835754,182.650757 
        C710.681335,186.358368 704.893188,188.166092 702.328125,193.778900 
        C701.721924,195.105408 699.931580,195.568069 698.337036,194.813324 
        C697.019531,194.189743 696.248840,193.049133 696.320862,191.620728 
        C696.423340,189.590057 697.613281,187.806992 699.534363,187.667572 
        C705.713196,187.219101 708.865540,181.935349 713.618713,178.890945 
        C707.700073,179.418503 701.773376,179.872055 695.866638,180.509613 
        C693.464111,180.768921 691.676819,182.390106 689.859558,183.890274 
        C686.265442,186.857117 682.639893,189.791245 678.927124,192.606689 
        C676.911377,194.135315 674.925781,195.533524 674.223145,198.191971 
        C673.757080,199.955292 672.470215,201.160019 670.541077,200.849258 
        C668.916016,200.587494 667.954163,199.352600 667.881042,197.660004 
        C667.800964,195.804184 668.598877,194.360046 670.436279,193.833130 
        C677.269714,191.873444 681.353088,186.114807 687.235901,182.604904 
        C671.073364,179.029449 661.496582,189.576828 651.060303,198.114426 
        C650.241028,198.784668 649.927185,200.111572 649.465454,201.171219 
        C648.723389,202.874481 647.546021,203.957977 645.621216,203.675674 
        C644.199524,203.467148 643.184387,202.526260 642.919434,201.072525 
        C642.552734,199.059891 643.197144,196.938751 645.109863,196.536957 
        C652.634277,194.956299 656.757874,188.502304 662.787903,184.655365 
        C654.848267,184.287125 646.784790,182.672516 640.360168,189.487900 
        C636.344421,193.747894 630.079102,195.789566 628.127686,202.146149 
        C627.728394,203.447052 626.163574,203.946121 624.719421,203.485962 
        C623.498108,203.096802 622.872681,202.113770 622.778381,200.838135 
        C622.644592,199.029282 623.169861,197.395660 624.895569,196.674896 
        C630.382446,194.383194 634.323486,189.874405 639.284485,186.843491 
        C639.853577,186.495834 640.422058,186.147202 641.241577,185.645584 
        C632.350647,181.949295 621.189331,185.269836 615.223694,192.943527 
        C614.018799,194.493408 613.210938,196.702377 610.626038,195.710861 
        C609.258606,195.186356 608.696960,193.869247 608.836182,192.426834 
        C609.060303,190.105133 610.382446,188.857529 612.749023,188.710144 
        C616.351990,188.485733 618.465637,185.547211 621.492615,183.686890 
        C614.753052,182.293854 608.476074,179.214554 601.529236,179.498352 
        C599.411194,179.584900 597.885803,179.400055 597.114807,177.348007 
        C596.521606,175.769028 597.004944,174.319077 598.376343,173.384811 
        C600.036987,172.253494 601.476685,172.958527 602.853333,174.171738 
        C607.039795,177.861328 612.564941,176.892776 618.279480,179.039261 
        C616.374878,175.546997 614.450378,173.922348 611.614807,173.114090 
        C609.768433,172.587814 609.191833,170.908157 609.398132,169.103027 
        C609.587463,167.446198 610.589172,166.326859 612.273743,166.104965 
        C613.779236,165.906677 614.913574,166.721527 615.398743,168.082260 
        C618.756836,177.501282 625.719727,180.933685 635.511902,180.036835 
        C635.100098,177.931290 633.214294,177.752274 631.665833,177.118866 
        C629.763062,176.340546 629.503723,174.725662 629.826111,172.961243 
        C630.087585,171.530762 630.961182,170.407257 632.436707,170.314346 
        C634.234070,170.201157 634.731689,171.564484 635.382629,173.080002 
        C637.429871,177.846283 640.864075,180.879730 646.428040,180.730927 
        C649.758789,180.641830 653.094177,180.685745 656.422058,180.543533 
        C657.906494,180.480103 659.393005,180.112885 657.255737,178.096619 
    z"/>


</motion.svg> 
</>
  )
}