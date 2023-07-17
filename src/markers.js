const markers = [

    
    { id: 1, x: 100, y: 100, info: "Information du marqueur 1" },
    { id: 2, x: 200, y: 200, info: "Information du marqueur 2" },
    { id: 3  , x: 3268, y: 3095, info: "Avant dernier etage du phare" },
    { id: 4  , x: 17702, y: 9352, info: "Avant dernier etage du phare" },
	{ id: 5  , x: 17543, y: 9277, info: "Avant dernier etage du phare" },
	{ id: 6  , x: 17445, y: 9265, info: "Avant dernier etage du phare" },
	{ id: 7  , x: 17049, y: 8821, info: "Avant dernier etage du phare" },
	{ id: 8  , x: 16830, y: 8819, info: "Avant dernier etage du phare" },
	{ id: 9  , x: 17272, y: 8809, info: "Avant dernier etage du phare" },
	{ id: 10 , x: 16634, y: 8799, info: "Avant dernier etage du phare" },
	{ id: 11 , x: 18235, y: 8779, info: "Avant dernier etage du phare" },
	{ id: 12 , x: 17605, y: 8776, info: "Avant dernier etage du phare" },
	{ id: 13 , x: 16734, y: 8773, info: "Avant dernier etage du phare" },
	{ id: 14 , x: 16510, y: 8729, info: "Avant dernier etage du phare" },
	{ id: 15 , x: 17868, y: 8704, info: "Avant dernier etage du phare" },
	{ id: 16 , x: 16637, y: 8698, info: "Avant dernier etage du phare" },
	{ id: 17 , x: 17152, y: 8693, info: "Avant dernier etage du phare" },
	{ id: 18 , x: 18211, y: 8678, info: "Avant dernier etage du phare" },
	{ id: 19 , x: 17438, y: 8623, info: "Avant dernier etage du phare" },
	{ id: 20 , x: 18115, y: 8605, info: "Avant dernier etage du phare" },
	{ id: 21 , x: 16237, y: 8502, info: "Avant dernier etage du phare" },
	{ id: 22 , x: 18192, y: 8445, info: "Avant dernier etage du phare" },
	{ id: 23 , x: 15948, y: 8414, info: "Avant dernier etage du phare" },
	{ id: 24 , x: 16597, y: 8377, info: "Avant dernier etage du phare" },
	{ id: 25 , x: 16677, y: 8338, info: "Avant dernier etage du phare" },
	{ id: 26 , x: 16101, y: 8316, info: "Avant dernier etage du phare" },
	{ id: 27 , x: 16567, y: 8309, info: "Avant dernier etage du phare" },
	{ id: 28 , x: 16630, y: 8301, info: "Avant dernier etage du phare" },
	{ id: 29 , x: 16563, y: 8263, info: "Avant dernier etage du phare" },
	{ id: 30 , x: 16274, y: 8256, info: "Avant dernier etage du phare" },
	{ id: 31 , x: 18522, y: 8254, info: "Avant dernier etage du phare" },
	{ id: 32 , x: 18580, y: 8204, info: "Avant dernier etage du phare" },
	{ id: 33 , x: 16032, y: 8198, info: "Avant dernier etage du phare" },
	{ id: 34 , x: 18621, y: 8163, info: "Avant dernier etage du phare" },
	{ id: 35 , x: 18526, y: 8151, info: "Avant dernier etage du phare" },
	{ id: 36 , x: 18669, y: 8093, info: "Avant dernier etage du phare" },
	{ id: 37 , x: 16177, y: 8019, info: "Avant dernier etage du phare" },
	{ id: 38 , x: 16013, y: 7989, info: "Avant dernier etage du phare" },
	{ id: 39 , x: 17451, y: 7891, info: "Avant dernier etage du phare" },
	{ id: 40 , x: 19149, y: 7861, info: "Avant dernier etage du phare" },
	{ id: 41 , x: 19593, y: 7821, info: "Avant dernier etage du phare" },
	{ id: 42 , x: 19746, y: 7819, info: "Avant dernier etage du phare" },
	{ id: 43 , x: 17560, y: 7808, info: "Avant dernier etage du phare" },
	{ id: 44 , x: 20178, y: 7805, info: "Avant dernier etage du phare" },
	{ id: 45 , x: 19015, y: 7803, info: "Avant dernier etage du phare" },
	{ id: 46 , x: 19305, y: 7793, info: "Avant dernier etage du phare" },
	{ id: 47 , x: 16069, y: 7728, info: "Avant dernier etage du phare" },
	{ id: 48 , x: 16999, y: 7708, info: "Avant dernier etage du phare" },
	{ id: 49 , x: 19702, y: 7682, info: "Avant dernier etage du phare" },
	{ id: 50 , x: 20259, y: 7676, info: "Avant dernier etage du phare" },
	{ id: 51 , x: 19270, y: 7659, info: "Avant dernier etage du phare" },
	{ id: 52 , x: 15984, y: 7633, info: "Avant dernier etage du phare" },
	{ id: 53 , x: 20090, y: 7572, info: "Avant dernier etage du phare" },
	{ id: 54 , x: 16059, y: 7559, info: "Avant dernier etage du phare" },
	{ id: 55 , x: 20088, y: 7535, info: "Avant dernier etage du phare" },
	{ id: 56 , x: 20145, y: 7497, info: "Avant dernier etage du phare" },
	{ id: 57 , x: 16975, y: 7408, info: "Avant dernier etage du phare" },
	{ id: 58 , x: 16694, y: 7405, info: "Avant dernier etage du phare" },
	{ id: 59 , x: 20276, y: 7389, info: "Avant dernier etage du phare" },
	{ id: 60 , x: 16082, y: 7356, info: "Avant dernier etage du phare" },
	{ id: 61 , x: 16781, y: 7355, info: "Avant dernier etage du phare" },
	{ id: 62 , x: 5963, y: 7363, info: "Avant dernier etage du phare" },
	{ id: 63 , x: 20193, y: 7349, info: "Avant dernier etage du phare" },
	{ id: 64 , x: 7370, y: 7342, info: "Avant dernier etage du phare" },
	{ id: 65 , x: 7638, y: 7282, info: "Avant dernier etage du phare" },
	{ id: 66 , x: 7396, y: 712, info: "Avant dernier etage du phare" },
	{ id: 67 , x: 6947, y: 7111, info: "Avant dernier etage du phare" },
	{ id: 68 , x: 20481, y: 7102, info: "Avant dernier etage du phare" },
	{ id: 69 , x: 21111, y: 7101, info: "Avant dernier etage du phare" },
	{ id: 70 , x: 20109, y: 7098, info: "Avant dernier etage du phare" },
	{ id: 71 , x: 7203, y: 7102, info: "Avant dernier etage du phare" },
	{ id: 72 , x: 20833, y: 7078, info: "Avant dernier etage du phare" },
	{ id: 73 , x: 20637, y: 7047, info: "Avant dernier etage du phare" },
	{ id: 74 , x: 20280, y: 7047, info: "Avant dernier etage du phare" },
	{ id: 75 , x: 21213, y: 7046, info: "Avant dernier etage du phare" },
	{ id: 76 , x: 20970, y: 7046, info: "Avant dernier etage du phare" },
	{ id: 77 , x: 20111, y: 7035, info: "Avant dernier etage du phare" },
	{ id: 78 , x: 16693, y: 7001, info: "Avant dernier etage du phare" },
	{ id: 79 , x: 21233, y: 6973, info: "Avant dernier etage du phare" },
	{ id: 80 , x: 12478, y: 6893, info: "Avant dernier etage du phare" },
	{ id: 81 , x: 4748, y: 6901, info: "Avant dernier etage du phare" },
	{ id: 82 , x: 6212, y: 6877, info: "Avant dernier etage du phare" },
	{ id: 83 , x: 7016, y: 6873, info: "Avant dernier etage du phare" },
	{ id: 84 , x: 4830, y: 6855, info: "Avant dernier etage du phare" },
	{ id: 85 , x: 4668, y: 6851, info: "Avant dernier etage du phare" },
	{ id: 86 , x: 6085, y: 6849, info: "Avant dernier etage du phare" },
	{ id: 87 , x: 14392, y: 6822, info: "Avant dernier etage du phare" },
	{ id: 88 , x: 13513, y: 6793, info: "Avant dernier etage du phare" },
	{ id: 89 , x: 12802, y: 6784, info: "Avant dernier etage du phare" },
	{ id: 90 , x: 7525, y: 6785, info: "Avant dernier etage du phare" },
	{ id: 91 , x: 12298, y: 6759, info: "Avant dernier etage du phare" },
	{ id: 92 , x: 7161, y: 6759, info: "Avant dernier etage du phare" },
	{ id: 93 , x: 11963, y: 6746, info: "Avant dernier etage du phare" },
	{ id: 94 , x: 6215, y: 6691, info: "Avant dernier etage du phare" },
	{ id: 95 , x: 6013, y: 6687, info: "Avant dernier etage du phare" },
	{ id: 96 , x: 6115, y: 6664, info: "Avant dernier etage du phare" },
	{ id: 97 , x: 21132, y: 6627, info: "Avant dernier etage du phare" },
	{ id: 98 , x: 7121, y: 6579, info: "Avant dernier etage du phare" },
	{ id: 99 , x: 6921, y: 6543, info: "Avant dernier etage du phare" },
	{ id: 100, x: 16692, y: 6505, info: "Avant dernier etage du phare" },
	{ id: 101, x: 7430, y: 6509, info: "Avant dernier etage du phare" },
	{ id: 102, x: 4827, y: 6501, info: "Avant dernier etage du phare" },
	{ id: 103, x: 14472, y: 6471, info: "Avant dernier etage du phare" },
	{ id: 104, x: 16129, y: 6422, info: "Avant dernier etage du phare" },
	{ id: 105, x: 21267, y: 6384, info: "Avant dernier etage du phare" },
	{ id: 106, x: 7526, y: 636, info: "Avant dernier etage du phare" },
	{ id: 107, x: 4923, y: 6351, info: "Avant dernier etage du phare" },
	{ id: 108, x: 4683, y: 6328, info: "Avant dernier etage du phare" },
	{ id: 109, x: 6961, y: 6323, info: "Avant dernier etage du phare" },
	{ id: 110, x: 20506, y: 6288, info: "Avant dernier etage du phare" },
	{ id: 111, x: 16066, y: 6272, info: "Avant dernier etage du phare" },
	{ id: 112, x: 20406, y: 6269, info: "Avant dernier etage du phare" },
	{ id: 113, x: 18917, y: 6265, info: "Avant dernier etage du phare" },
	{ id: 114, x: 9546, y: 6265, info: "Avant dernier etage du phare" },
	{ id: 115, x: 19029, y: 6238, info: "Avant dernier etage du phare" },
	{ id: 116, x: 16967, y: 6237, info: "Avant dernier etage du phare" },
	{ id: 117, x: 7453, y: 6247, info: "Avant dernier etage du phare" },
	{ id: 118, x: 18948, y: 6226, info: "Avant dernier etage du phare" },
	{ id: 119, x: 20301, y: 6216, info: "Avant dernier etage du phare" },
	{ id: 120, x: 16703, y: 6198, info: "Avant dernier etage du phare" },
	{ id: 121, x: 4843, y: 6189, info: "Avant dernier etage du phare" },
	{ id: 122, x: 16899, y: 6163, info: "Avant dernier etage du phare" },
	{ id: 123, x: 20424, y: 6157, info: "Avant dernier etage du phare" },
	{ id: 124, x: 16002, y: 6146, info: "Avant dernier etage du phare" },
	{ id: 125, x: 3847, y: 6135, info: "Avant dernier etage du phare" },
	{ id: 126, x: 4303, y: 6125, info: "Avant dernier etage du phare" },
	{ id: 127, x: 14435, y: 6123, info: "Avant dernier etage du phare" },
	{ id: 128, x: 4110, y: 6123, info: "Avant dernier etage du phare" },
	{ id: 129, x: 18963, y: 6116, info: "Avant dernier etage du phare" },
	{ id: 130, x: 3818, y: 6101, info: "Avant dernier etage du phare" },
	{ id: 131, x: 4303, y: 6087, info: "Avant dernier etage du phare" },
	{ id: 132, x: 9715, y: 6086, info: "Avant dernier etage du phare" },
	{ id: 133, x: 16100, y: 6077, info: "Avant dernier etage du phare" },
	{ id: 134, x: 4277, y: 6076, info: "Avant dernier etage du phare" },
	{ id: 135, x: 4111, y: 6076, info: "Avant dernier etage du phare" },
	{ id: 136, x: 16828, y: 6041, info: "Avant dernier etage du phare" },
	{ id: 137, x: 9494, y: 6025, info: "Avant dernier etage du phare" },
	{ id: 138, x: 4651, y: 6019, info: "Avant dernier etage du phare" },
	{ id: 139, x: 1112, y: 6011, info: "Avant dernier etage du phare" },
	{ id: 140, x: 4255, y: 6006, info: "Avant dernier etage du phare" },
	{ id: 141, x: 19212, y: 5988, info: "Avant dernier etage du phare" },
	{ id: 142, x: 9494, y: 5969, info: "Avant dernier etage du phare" },
	{ id: 143, x: 8701, y: 5967, info: "Avant dernier etage du phare" },
	{ id: 144, x: 760, y: 5958, info: "Avant dernier etage du phare" },
	{ id: 145, x: 7137, y: 5958, info: "Avant dernier etage du phare" },
	{ id: 146, x: 14519, y: 5928, info: "Avant dernier etage du phare" },
	{ id: 147, x: 4407, y: 5922, info: "Avant dernier etage du phare" },
	{ id: 148, x: 7504, y: 5929, info: "Avant dernier etage du phare" },
	{ id: 149, x: 4669, y: 5907, info: "Avant dernier etage du phare" },
	{ id: 150, x: 3817, y: 5893, info: "Avant dernier etage du phare" },
	{ id: 151, x: 8688, y: 5885, info: "Avant dernier etage du phare" },
	{ id: 152, x: 16774, y: 5872, info: "Avant dernier etage du phare" },
	{ id: 153, x: 4280, y: 5868, info: "Avant dernier etage du phare" },
	{ id: 154, x: 21117, y: 5861, info: "Avant dernier etage du phare" },
	{ id: 155, x: 975, y: 5846, info: "Avant dernier etage du phare" },
	{ id: 156, x: 14480, y: 5844, info: "Avant dernier etage du phare" },
	{ id: 157, x: 7549, y: 5807, info: "Avant dernier etage du phare" },
	{ id: 158, x: 7030, y: 5807, info: "Avant dernier etage du phare" },
	{ id: 159, x: 1647, y: 5799, info: "Avant dernier etage du phare" },
	{ id: 160, x: 1727, y: 5734, info: "Avant dernier etage du phare" },
	{ id: 161, x: 1550, y: 5701, info: "Avant dernier etage du phare" },
	{ id: 162, x: 19321, y: 5666, info: "Avant dernier etage du phare" },
	{ id: 163, x: 1713, y: 5666, info: "Avant dernier etage du phare" },
	{ id: 164, x: 19363, y: 5665, info: "Avant dernier etage du phare" },
	{ id: 165, x: 21153, y: 5637, info: "Avant dernier etage du phare" },
	{ id: 166, x: 21066, y: 5606, info: "Avant dernier etage du phare" },
	{ id: 167, x: 10053, y: 5606, info: "Avant dernier etage du phare" },
	{ id: 168, x: 492, y: 5603, info: "Avant dernier etage du phare" },
	{ id: 169, x: 14409, y: 5584, info: "Avant dernier etage du phare" },
	{ id: 170, x: 8655, y: 5539, info: "Avant dernier etage du phare" },
	{ id: 171, x: 2214, y: 5462, info: "Avant dernier etage du phare" },
	{ id: 172, x: 2442, y: 5461, info: "Avant dernier etage du phare" },
	{ id: 173, x: 21003, y: 5395, info: "Avant dernier etage du phare" },
	{ id: 174, x: 5032, y: 5367, info: "Avant dernier etage du phare" },
	{ id: 175, x: 10366, y: 5364, info: "Avant dernier etage du phare" },
	{ id: 176, x: 5272, y: 5361, info: "Avant dernier etage du phare" },
	{ id: 177, x: 10223, y: 5349, info: "Avant dernier etage du phare" },
	{ id: 178, x: 5112, y: 5328, info: "Avant dernier etage du phare" },
	{ id: 179, x: 16462, y: 5298, info: "Avant dernier etage du phare" },
	{ id: 180, x: 8494, y: 5304, info: "Avant dernier etage du phare" },
	{ id: 181, x: 2504, y: 5266, info: "Avant dernier etage du phare" },
	{ id: 182, x: 4981, y: 5247, info: "Avant dernier etage du phare" },
	{ id: 183, x: 5095, y: 5189, info: "Avant dernier etage du phare" },
	{ id: 184, x: 2888, y: 5174, info: "Avant dernier etage du phare" },
	{ id: 185, x: 16425, y: 5165, info: "Avant dernier etage du phare" },
	{ id: 186, x: 2437, y: 5142, info: "Avant dernier etage du phare" },
	{ id: 187, x: 2742, y: 5139, info: "Avant dernier etage du phare" },
	{ id: 188, x: 4169, y: 5138, info: "Avant dernier etage du phare" },
	{ id: 189, x: 4215, y: 5106, info: "Avant dernier etage du phare" },
	{ id: 190, x: 4299, y: 5103, info: "Avant dernier etage du phare" },
	{ id: 191, x: 16460, y: 5062, info: "Avant dernier etage du phare" },
	{ id: 192, x: 4096, y: 5055, info: "Avant dernier etage du phare" },
	{ id: 193, x: 4290, y: 5054, info: "Avant dernier etage du phare" },
	{ id: 194, x: 4693, y: 5052, info: "Avant dernier etage du phare" },
	{ id: 195, x: 10312, y: 5034, info: "Avant dernier etage du phare" },
	{ id: 196, x: 17291, y: 5021, info: "Avant dernier etage du phare" },
	{ id: 197, x: 1670, y: 5021, info: "Avant dernier etage du phare" },
	{ id: 198, x: 2410, y: 5018, info: "Avant dernier etage du phare" },
	{ id: 199, x: 4285, y: 5008, info: "Avant dernier etage du phare" },
	{ id: 200, x: 4328, y: 4987, info: "Avant dernier etage du phare" },
	{ id: 201, x: 16463, y: 4984, info: "Avant dernier etage du phare" },
	{ id: 202, x: 4518, y: 4977, info: "Avant dernier etage du phare" },
	{ id: 203, x: 17107, y: 4972, info: "Avant dernier etage du phare" },
	{ id: 204, x: 17138, y: 4971, info: "Avant dernier etage du phare" },
	{ id: 205, x: 20067, y: 4966, info: "Avant dernier etage du phare" },
	{ id: 206, x: 3864, y: 4952, info: "Avant dernier etage du phare" },
	{ id: 207, x: 20136, y: 4941, info: "Avant dernier etage du phare" },
	{ id: 208, x: 4087, y: 4939, info: "Avant dernier etage du phare" },
	{ id: 209, x: 2871, y: 4933, info: "Avant dernier etage du phare" },
	{ id: 210, x: 4381, y: 4925, info: "Avant dernier etage du phare" },
	{ id: 211, x: 3905, y: 4925, info: "Avant dernier etage du phare" },
	{ id: 212, x: 4243, y: 4924, info: "Avant dernier etage du phare" },
	{ id: 213, x: 20066, y: 4918, info: "Avant dernier etage du phare" },
	{ id: 214, x: 20334, y: 4888, info: "Avant dernier etage du phare" },
	{ id: 215, x: 20533, y: 4884, info: "Avant dernier etage du phare" },
	{ id: 216, x: 3082, y: 4881, info: "Avant dernier etage du phare" },
	{ id: 217, x: 3406, y: 4864, info: "Avant dernier etage du phare" },
	{ id: 218, x: 2430, y: 4858, info: "Avant dernier etage du phare" },
	{ id: 219, x: 8186, y: 4826, info: "Avant dernier etage du phare" },
	{ id: 220, x: 16090, y: 4812, info: "Avant dernier etage du phare" },
	{ id: 221, x: 17242, y: 4809, info: "Avant dernier etage du phare" },
	{ id: 222, x: 20460, y: 4795, info: "Avant dernier etage du phare" },
	{ id: 223, x: 20432, y: 4795, info: "Avant dernier etage du phare" },
	{ id: 224, x: 4128, y: 4783, info: "Avant dernier etage du phare" },
	{ id: 225, x: 8283, y: 4777, info: "Avant dernier etage du phare" },
	{ id: 226, x: 4702, y: 4736, info: "Avant dernier etage du phare" },
	{ id: 227, x: 4599, y: 4725, info: "Avant dernier etage du phare" },
	{ id: 228, x: 3522, y: 4718, info: "Avant dernier etage du phare" },
	{ id: 229, x: 3343, y: 4706, info: "Avant dernier etage du phare" },
	{ id: 230, x: 19856, y: 4693, info: "Avant dernier etage du phare" },
	{ id: 231, x: 20097, y: 4692, info: "Avant dernier etage du phare" },
	{ id: 232, x: 10221, y: 4692, info: "Avant dernier etage du phare" },
	{ id: 233, x: 8234, y: 4687, info: "Avant dernier etage du phare" },
	{ id: 234, x: 10650, y: 4672, info: "Avant dernier etage du phare" },
	{ id: 235, x: 4645, y: 4634, info: "Avant dernier etage du phare" },
	{ id: 236, x: 17194, y: 4627, info: "Avant dernier etage du phare" },
	{ id: 237, x: 10607, y: 4613, info: "Avant dernier etage du phare" },
	{ id: 238, x: 2792, y: 4603, info: "Avant dernier etage du phare" },
	{ id: 239, x: 4121, y: 4593, info: "Avant dernier etage du phare" },
	{ id: 240, x: 4596, y: 4584, info: "Avant dernier etage du phare" },
	{ id: 241, x: 19976, y: 4581, info: "Avant dernier etage du phare" },
	{ id: 242, x: 3300, y: 4564, info: "Avant dernier etage du phare" },
	{ id: 243, x: 2720, y: 4552, info: "Avant dernier etage du phare" },
	{ id: 244, x: 3390, y: 4544, info: "Avant dernier etage du phare" },
	{ id: 245, x: 10042, y: 4543, info: "Avant dernier etage du phare" },
	{ id: 246, x: 20097, y: 4525, info: "Avant dernier etage du phare" },
	{ id: 247, x: 19855, y: 4523, info: "Avant dernier etage du phare" },
	{ id: 248, x: 10791, y: 4529, info: "Avant dernier etage du phare" },
	{ id: 249, x: 7679, y: 4513, info: "Avant dernier etage du phare" },
	{ id: 250, x: 8015, y: 4493, info: "Avant dernier etage du phare" },
	{ id: 251, x: 4661, y: 4485, info: "Avant dernier etage du phare" },
	{ id: 252, x: 4869, y: 4473, info: "Avant dernier etage du phare" },
	{ id: 253, x: 7953, y: 4466, info: "Avant dernier etage du phare" },
	{ id: 254, x: 21288, y: 4449, info: "Avant dernier etage du phare" },
	{ id: 255, x: 8003, y: 4437, info: "Avant dernier etage du phare" },
	{ id: 256, x: 15731, y: 4419, info: "Avant dernier etage du phare" },
	{ id: 257, x: 2849, y: 4395, info: "Avant dernier etage du phare" },
	{ id: 258, x: 21071, y: 4384, info: "Avant dernier etage du phare" },
	{ id: 259, x: 7760, y: 4383, info: "Avant dernier etage du phare" },
	{ id: 260, x: 10682, y: 4362, info: "Avant dernier etage du phare" },
	{ id: 261, x: 7302, y: 4353, info: "Avant dernier etage du phare" },
	{ id: 262, x: 7942, y: 4347, info: "Avant dernier etage du phare" },
	{ id: 263, x: 2751, y: 4283, info: "Avant dernier etage du phare" },
	{ id: 264, x: 10205, y: 4244, info: "Avant dernier etage du phare" },
	{ id: 265, x: 15721, y: 4183, info: "Avant dernier etage du phare" },
	{ id: 266, x: 15766, y: 3997, info: "Avant dernier etage du phare" },
	{ id: 267, x: 4812, y: 3984, info: "Avant dernier etage du phare" },
	{ id: 268, x: 3235, y: 3933, info: "Avant dernier etage du phare" },
	{ id: 269, x: 5716, y: 3906, info: "Avant dernier etage du phare" },
	{ id: 270, x: 10664, y: 3903, info: "Avant dernier etage du phare" },
	{ id: 271, x: 5380, y: 387, info: "Avant dernier etage du phare" },
	{ id: 272, x: 15329, y: 3869, info: "Avant dernier etage du phare" },
	{ id: 273, x: 20341, y: 3805, info: "Avant dernier etage du phare" },
	{ id: 274, x: 20962, y: 3789, info: "Avant dernier etage du phare" },
	{ id: 275, x: 19081, y: 3775, info: "Avant dernier etage du phare" },
	{ id: 276, x: 14512, y: 3765, info: "Avant dernier etage du phare" },
	{ id: 277, x: 13137, y: 3761, info: "Avant dernier etage du phare" },
	{ id: 278, x: 18998, y: 3758, info: "Avant dernier etage du phare" },
	{ id: 279, x: 15601, y: 3731, info: "Avant dernier etage du phare" },
	{ id: 280, x: 18921, y: 3717, info: "Avant dernier etage du phare" },
	{ id: 281, x: 19015, y: 3683, info: "Avant dernier etage du phare" },
	{ id: 282, x: 21077, y: 3669, info: "Avant dernier etage du phare" },
	{ id: 283, x: 2993, y: 3659, info: "Avant dernier etage du phare" },
	{ id: 284, x: 19096, y: 3649, info: "Avant dernier etage du phare" },
	{ id: 285, x: 20263, y: 3617, info: "Avant dernier etage du phare" },
	{ id: 286, x: 4795, y: 3589, info: "Avant dernier etage du phare" },
	{ id: 287, x: 20915, y: 3576, info: "Avant dernier etage du phare" },
	{ id: 288, x: 3285, y: 3534, info: "Avant dernier etage du phare" },
	{ id: 289, x: 18953, y: 3523, info: "Avant dernier etage du phare" },
	{ id: 290, x: 15929, y: 3522, info: "Avant dernier etage du phare" },
	{ id: 291, x: 3116, y: 3489, info: "Avant dernier etage du phare" },
	{ id: 292, x: 6390, y: 3454, info: "Avant dernier etage du phare" },
	{ id: 293, x: 6076, y: 3452, info: "Avant dernier etage du phare" },
	{ id: 294, x: 5547, y: 3445, info: "Avant dernier etage du phare" },
	{ id: 295, x: 7282, y: 345, info: "Avant dernier etage du phare" },
	{ id: 296, x: 17740, y: 3432, info: "Avant dernier etage du phare" },
	{ id: 297, x: 5736, y: 3432, info: "Avant dernier etage du phare" },
	{ id: 298, x: 7191, y: 3428, info: "Avant dernier etage du phare" },
	{ id: 299, x: 8077, y: 3417, info: "Avant dernier etage du phare" },
	{ id: 300, x: 7010, y: 3424, info: "Avant dernier etage du phare" },
	{ id: 301, x: 6871, y: 3418, info: "Avant dernier etage du phare" },
	{ id: 302, x: 6306, y: 3404, info: "Avant dernier etage du phare" },
	{ id: 303, x: 8011, y: 3397, info: "Avant dernier etage du phare" },
	{ id: 304, x: 7870, y: 3395, info: "Avant dernier etage du phare" },
	{ id: 305, x: 17653, y: 3377, info: "Avant dernier etage du phare" },
	{ id: 306, x: 8190, y: 3364, info: "Avant dernier etage du phare" },
	{ id: 307, x: 5621, y: 3363, info: "Avant dernier etage du phare" },
	{ id: 308, x: 5476, y: 3362, info: "Avant dernier etage du phare" },
	{ id: 309, x: 7521, y: 3358, info: "Avant dernier etage du phare" },
	{ id: 310, x: 3706, y: 3348, info: "Avant dernier etage du phare" },
	{ id: 311, x: 3235, y: 3341, info: "Avant dernier etage du phare" },
	{ id: 312, x: 8094, y: 3332, info: "Avant dernier etage du phare" },
	{ id: 313, x: 7473, y: 3328, info: "Avant dernier etage du phare" },
	{ id: 314, x: 6688, y: 3319, info: "Avant dernier etage du phare" },
	{ id: 315, x: 18613, y: 3318, info: "Avant dernier etage du phare" },
	{ id: 316, x: 18319, y: 3317, info: "Avant dernier etage du phare" },
	{ id: 317, x: 3667, y: 3317, info: "Avant dernier etage du phare" },
	{ id: 318, x: 2962, y: 3304, info: "Avant dernier etage du phare" },
	{ id: 319, x: 5137, y: 3301, info: "Avant dernier etage du phare" },
	{ id: 320, x: 17747, y: 3299, info: "Avant dernier etage du phare" },
	{ id: 321, x: 17386, y: 3299, info: "Avant dernier etage du phare" },
	{ id: 322, x: 3116, y: 3295, info: "Avant dernier etage du phare" },
	{ id: 323, x: 18811, y: 3288, info: "Avant dernier etage du phare" },
	{ id: 324, x: 3048, y: 3288, info: "Avant dernier etage du phare" },
	{ id: 325, x: 6390, y: 3284, info: "Avant dernier etage du phare" },
	{ id: 326, x: 8157, y: 3268, info: "Avant dernier etage du phare" },
	{ id: 327, x: 3248, y: 3259, info: "Avant dernier etage du phare" },
	{ id: 328, x: 7269, y: 3256, info: "Avant dernier etage du phare" },
	{ id: 329, x: 6015, y: 3241, info: "Avant dernier etage du phare" },
	{ id: 330, x: 17013, y: 3236, info: "Avant dernier etage du phare" },
	{ id: 331, x: 17234, y: 3232, info: "Avant dernier etage du phare" },
	{ id: 332, x: 6595, y: 3221, info: "Avant dernier etage du phare" },
	{ id: 333, x: 6389, y: 3221, info: "Avant dernier etage du phare" },
	{ id: 334, x: 6077, y: 3221, info: "Avant dernier etage du phare" },
	{ id: 335, x: 5162, y: 3209, info: "Avant dernier etage du phare" },
	{ id: 336, x: 5033, y: 3198, info: "Avant dernier etage du phare" },
	{ id: 337, x: 16988, y: 3183, info: "Avant dernier etage du phare" },
	{ id: 338, x: 3207, y: 3162, info: "Avant dernier etage du phare" },
	{ id: 339, x: 17025, y: 3137, info: "Avant dernier etage du phare" },
	{ id: 340, x: 17101, y: 3123, info: "Avant dernier etage du phare" },
	{ id: 341, x: 5058, y: 3098, info: "Avant dernier etage du phare" },
	{ id: 342, x: 8614, y: 3097, info: "Avant dernier etage du phare" },
	{ id: 343, x: 3267, y: 3093, info: "Avant dernier etage du phare" },
	{ id: 344, x: 8762, y: 3086, info: "Avant dernier etage du phare" },
	{ id: 345, x: 8414, y: 3077, info: "Avant dernier etage du phare" },
	{ id: 346, x: 3732, y: 3041, info: "Avant dernier etage du phare" },
	{ id: 347, x: 7286, y: 3016, info: "Avant dernier etage du phare" },
	{ id: 348, x: 8191, y: 3009, info: "Avant dernier etage du phare" },
	{ id: 349, x: 6996, y: 3001, info: "Avant dernier etage du phare" },
	{ id: 350, x: 5045, y: 2987, info: "Avant dernier etage du phare" },
	{ id: 351, x: 14678, y: 2985, info: "Avant dernier etage du phare" },
	{ id: 352, x: 14338, y: 2976, info: "Avant dernier etage du phare" },
	{ id: 353, x: 4417, y: 2971, info: "Avant dernier etage du phare" },
	{ id: 354, x: 7189, y: 2954, info: "Avant dernier etage du phare" },
	{ id: 355, x: 9075, y: 2948, info: "Avant dernier etage du phare" },
	{ id: 356, x: 4256, y: 2912, info: "Avant dernier etage du phare" },
	{ id: 357, x: 19801, y: 2895, info: "Avant dernier etage du phare" },
	{ id: 358, x: 4674, y: 2887, info: "Avant dernier etage du phare" },
	{ id: 359, x: 8652, y: 2886, info: "Avant dernier etage du phare" },
	{ id: 360, x: 8752, y: 2873, info: "Avant dernier etage du phare" },
	{ id: 361, x: 4432, y: 2839, info: "Avant dernier etage du phare" },
	{ id: 362, x: 4081, y: 2826, info: "Avant dernier etage du phare" },
	{ id: 363, x: 17717, y: 2817, info: "Avant dernier etage du phare" },
	{ id: 364, x: 7688, y: 2668, info: "Avant dernier etage du phare" },
	{ id: 365, x: 16569, y: 2616, info: "Avant dernier etage du phare" },
	{ id: 366, x: 14345, y: 2602, info: "Avant dernier etage du phare" },
	{ id: 367, x: 14677, y: 2593, info: "Avant dernier etage du phare" },
	{ id: 368, x: 5738, y: 2559, info: "Avant dernier etage du phare" },
	{ id: 369, x: 16600, y: 2542, info: "Avant dernier etage du phare" },
	{ id: 370, x: 5654, y: 2538, info: "Avant dernier etage du phare" },
	{ id: 371, x: 5820, y: 2536, info: "Avant dernier etage du phare" },
	{ id: 372, x: 5736, y: 2536, info: "Avant dernier etage du phare" },
	{ id: 373, x: 20616, y: 2531, info: "Avant dernier etage du phare" },
	{ id: 374, x: 20136, y: 2529, info: "Avant dernier etage du phare" },
	{ id: 375, x: 5787, y: 2525, info: "Avant dernier etage du phare" },
	{ id: 376, x: 5688, y: 2521, info: "Avant dernier etage du phare" },
	{ id: 377, x: 20426, y: 2497, info: "Avant dernier etage du phare" },
	{ id: 378, x: 20551, y: 2496, info: "Avant dernier etage du phare" },
	{ id: 379, x: 19961, y: 2494, info: "Avant dernier etage du phare" },
	{ id: 380, x: 20874, y: 2482, info: "Avant dernier etage du phare" },
	{ id: 381, x: 20475, y: 2402, info: "Avant dernier etage du phare" },
	{ id: 382, x: 16583, y: 2399, info: "Avant dernier etage du phare" },
	{ id: 383, x: 5178, y: 2398, info: "Avant dernier etage du phare" },
	{ id: 384, x: 7688, y: 2396, info: "Avant dernier etage du phare" },
	{ id: 385, x: 7768, y: 2337, info: "Avant dernier etage du phare" },
	{ id: 386, x: 4992, y: 2296, info: "Avant dernier etage du phare" },
	{ id: 387, x: 5181, y: 2289, info: "Avant dernier etage du phare" },
	{ id: 388, x: 7593, y: 2225, info: "Avant dernier etage du phare" },
	{ id: 389, x: 7753, y: 2116, info: "Avant dernier etage du phare" },
	{ id: 390, x: 14503, y: 2093, info: "Avant dernier etage du phare" },
	{ id: 391, x: 6511, y: 196, info: "Avant dernier etage du phare" },
	{ id: 392, x: 7764, y: 1829, info: "Avant dernier etage du phare" },
	{ id: 393, x: 14646, y: 1768, info: "Avant dernier etage du phare" },
	{ id: 394, x: 14307, y: 1756, info: "Avant dernier etage du phare" },
	{ id: 395, x: 6354, y: 1552, info: "Avant dernier etage du phare" },
	{ id: 396, x: 8073, y: 1513, info: "Avant dernier etage du phare" },
	{ id: 397, x: 14313, y: 1384, info: "Avant dernier etage du phare" },
	{ id: 398, x: 14645, y: 1378, info: "Avant dernier etage du phare" },
	{ id: 399, x: 14472, y: 874, info: "Avant dernier etage du phare" },
	{ id: 400, x: 7209, y: 789, info: "Avant dernier etage du phare" },
	{ id: 401, x: 6640, y: 187, info: "Avant dernier etage du phare" },
    // Ajoutez d'autres marqueurs avec leurs informations correspondantes
  ];
  
  export default markers;
  