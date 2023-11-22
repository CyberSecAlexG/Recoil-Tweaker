import { DependencyContainer } from "tsyringe"
import type { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod"
import type { DatabaseServer } from "@spt-aki/servers/DatabaseServer"

class RecoilTweaker implements IPostDBLoadMod 
{
    private container: DependencyContainer
    private config = require("../config/config.json")

    public postDBLoad(container: DependencyContainer): void 
    {

        this.container = container
        const tables = this.container.resolve<DatabaseServer>("DatabaseServer").getTables()
        const items = tables.templates.items
        
        tables.globals.config.AimPunchMagnitude *= this.config.aimPunch; // Sets aim punch value.
        if (!this.config.hiddenBonusRecoilToggle)
        {
            tables.globals.config.Aiming.RecoilBackBonus = 0;
            tables.globals.config.Aiming.RecoilVertBonus = 0;
        }
        tables.globals.config.Aiming.RecoilCrank = this.config.recoilCrank;
        tables.globals.config.Aiming.RecoilDamping *= this.config.recoilDamping;
        tables.globals.config.Aiming.RecoilHandDamping *= this.config.recoilHandDamping;
        tables.globals.config.Aiming.AimProceduralIntensity = this.config.aimProceduralIntensity;
        tables.globals.config.Aiming.RecoilXIntensityByPose["x"] *= this.config.RecoilXIntensityByPoseX
        tables.globals.config.Aiming.RecoilXIntensityByPose["y"] *= this.config.RecoilXIntensityByPoseY
        tables.globals.config.Aiming.RecoilXIntensityByPose["z"] *= this.config.RecoilXIntensityByPoseZ
        tables.globals.config.Aiming.RecoilYIntensityByPose["x"] *= this.config.RecoilYIntensityByPoseX
        tables.globals.config.Aiming.RecoilYIntensityByPose["y"] *= this.config.RecoilYIntensityByPoseY
        tables.globals.config.Aiming.RecoilYIntensityByPose["z"] *= this.config.RecoilYIntensityByPoseZ
        tables.globals.config.Aiming.RecoilZIntensityByPose["x"] *= this.config.RecoilZIntensityByPoseX
        tables.globals.config.Aiming.RecoilZIntensityByPose["y"] *= this.config.RecoilZIntensityByPoseY
        tables.globals.config.Aiming.RecoilZIntensityByPose["z"] *= this.config.RecoilZIntensityByPoseZ
        tables.globals.config.Aiming.ProceduralIntensityByPose["x"] *= this.config.ProceduralIntensityByPoseX
        tables.globals.config.Aiming.ProceduralIntensityByPose["y"] *= this.config.ProceduralIntensityByPoseY
        tables.globals.config.Aiming.ProceduralIntensityByPose["z"] *= this.config.ProceduralIntensityByPoseZ

        const weaponClassList = [
            "5447b5cf4bdc2d65278b4567", // Pistols
            "5447b5e04bdc2d62278b4567", // SMGs
            "5447b6094bdc2dc3278b4567", // Shotguns
            "5447b5f14bdc2d61278b4567", // Assault Rifles
            "5447b5fc4bdc2d87278b4567", // Carbines
            "5447bed64bdc2d97278b4568", // LMGs
            "5447b6194bdc2d67278b4567", // Marksman Rifles
            "5447b6254bdc2dc3278b4568"  // Sniper Rifles
        ]

        // Rifles
        const adar = "5c07c60e0db834002330051f"
        const ak101 = "5ac66cb05acfc40198510a10"
        const ak102 = "5ac66d015acfc400180ae6e4"
        const ak103 = "5ac66d2e5acfc43b321d4b53"
        const ak104 = "5ac66d725acfc43b321d4b60"
        const ak105 = "5ac66d9b5acfc4001633997a"
        const ak74 = "5bf3e03b0db834001d2c4a9c"
        const ak74m = "5ac4cd105acfc40016339859"
        const ak74n = "5644bd2b4bdc2d3b4c8b4572"
        const akm = "59d6088586f774275f37482f"
        const akmn = "5a0ec13bfcdbcb00165aa685"
        const akms = "59ff346386f77477562ff5e2"
        const akmsn = "5abcbc27d8ce8700182eceeb"
        const aks74 = "5bf3e0490db83400196199af"
        const aks74n = "5ab8e9fcd8ce870019439434"
        const aks74u = "57dc2fa62459775949412633"
        const aks74ub = "5839a40f24597726f856b511"
        const aks74un = "583990e32459771419544dd2"
        const ash = "5cadfbf7ae92152ac412eeef"
        const aug1 = "62e7c4fba689e8c9c50dfc38"
        const aug3 = "63171672192e68c5460cebc5"
        const mdr556 = "5c488a752e221602b412af63"
        const mdr762 = "5dcbd56fdbd3d91b3e5468d5"
        const hk416 = "5bb2475ed4351e00853264e3"
        const g36 = "623063e994fc3f7b302a9696"
        const m4a1 = "5447a9cd4bdc2dbd208b4567"
        const mcx = "5fbcc1d9016cce60e8341ab3"
        const mk47 = "606587252535c57a13424cfd"
        const rd = "628a60ae6b1d481ff772e9c8"
        const sa58 = "5b0bbe4e5acfc40dc528a72d"
        const sagak = "628b5638ad252a16da6dd245"
        const sagaks = "628b9c37a733087d0d7fe84b"
        const scarh = "6183afd850224f204c1da514"
        const scarhd = "6165ac306ef05c2ce828ef74"
        const scarl = "6184055050224f204c1da540"
        const scarld = "618428466ef05c2ce828f218"
        const tx15 = "5d43021ca4b9362eab4b5e25"
        const vpo209 = "59e6687d86f77411d949b251"
        const vpo136 = "59e6152586f77473dc057aa1"
        // Carbines
        const val = "57c44b372459772d2b39b8ce"
        const opsks = "587e02ff24597743df3deaeb"
        const sks = "574d967124597745970e7c94"
        const vpo101 = "5c501a4d2e221602b412b540"
        // LMGs
        const rpk = "5beed0f50db834001c062b12"
        // SMGs
        const mp5 = "5926bb2186f7744b1c6c6e60"
        const mp5k = "5d2f0d8048f0356c925bc3b0"
        const mp7a1 = "5ba26383d4351e00334c93d9"
        const mp7a2 = "5bd70322209c4d00d7167b8f"
        const mp9 = "5e00903ae9dc277128008b87"
        const mp9n = "5de7bd7bfd6b4e6e2276dc25"
        const mpx = "58948c8e86f77409493f7266"
        const p90 = "5cc82d76e24e8d00134b4b83"
        const pp19 = "59984ab886f7743e98271174"
        const pp9 = "57f4c844245977379d5c14d1"
        const pp91 = "57d14d2524597714373db789"
        const pp9101 = "57f3c6bd24597738e730fa2f"
        const ppsh = "5ea03f7400685063ec28bfa8"
        const saiga9 = "59f9cabd86f7743a10721f46"
        const sr2m = "62e14904c2699c0ec93adc47"
        const stm = "60339954d62c9b14ed777c06"
        const ump = "5fc3e272f8b6a877a729eac5"
        const vector45 = "5fb64bc92b1b027b1f50bcf2"
        const vector9x19 = "5fc3f2d5900b1d5091531e57"
        // Shotguns
        const ks = "5e848cc2988a8701445df1e8"
        const m3 = "6259b864ebedf17603599e88"
        const m590 = "5e870397991fd70db46995c8"
        const m870 = "5a7828548dc32e5a9c28b516"
        const mp133 = "54491c4f4bdc2db1078b4568"
        const mp153 = "56dee2bdd2720bc8328b4567"
        const mp155 = "606dae0ab0e443224b421bb7"
        const mp43 = "5580223e4bdc2d1c128b457f"
        const mts = "60db29ce99594040e04c4a27"
        const saiga12 = "576165642459773c7a400233"
        const toz = "5a38e6bac4a2826c6e06d79b"
        // DMRs
        const hkg28 = "6176aca650224f204c1da3fb"
        const m1a = "5aafa857e5b5b00018480968"
        const mk18 = "5fc22d7c187fea44d52eda44"
        const rfb = "5f2a9575926fd9352339381f"
        const rsass = "5a367e5dc4a282000e49738f"
        const sr25 = "5df8ce05b11454561e39243b"
        const svds = "5c46fbd72e2216398b5a8c9c"
        const vss = "57838ad32459774a17445cd2"
        // Snipers
        const axmc = "627e14b21713922ded6f2c15"
        const dvl = "588892092459774ac91d4b11"
        const m700 = "5bfea6e90db834001b7347f3"
        const mosini = "5bfd297f0db834001a669119"
        const mosins = "5ae08f0a5acfc408fb1398a1"
        const sv98 = "55801eed4bdc2d89578b4588"
        const t5000 = "5df24cf80dee1b22f862e9bc"
        const vpo215 = "5de652c31b7e3716273428be"
        // Pistols
        const apb = "5abccb7dd8ce87001773e277"
        const aps = "5a17f98cfcdbcb0980087290"
        const fn = "5d3eb3b0a4b93615055e84d2"
        const fnd = "5d67abc1a4b93614ec50137f"
        const glk17 = "5a7ae0c351dfba0017554310"
        const glk18 = "5b1fa9b25acfc40018633c01"
        const glk19 = "63088377b5cd696784087147"
        const m1911 = "5e81c3cbac2bb513793cdc75"
        const m45a1 = "5f36a0e5fbf956000b716b65"
        const m9a3 = "5cadc190ae921500103bb3b6"
        const mp443 = "576a581d2459771e7b1bc4f1"
        const p226 = "56d59856d2720bd8418b456a"
        const pb = "56e0598dd2720bb5668b45a6"
        const pl15 = "602a9740da11d6478d5a06dc"
        const pm = "5448bd6b4bdc2dfc2f8b4569"
        const pmt = "579204f224597773d619e051"
        const sr1mp = "59f98b4986f7746f546d2cef"
        const tt = "571a12c42459771f627b58a0"
        const ttg = "5b3b713c5acfc4330140bd8d"
        const usp = "6193a720f8ee7e52e42109ed"
        const cr200 = "624c2e8614da335f1e034d8c"
        const cr50 = "61a4c8884f95bc3b2c5dc96f"
        const rsh12 = "633ec7c2a6918cb895019c6c"


        for (const eachItem in items) 
        {
            const weapon = items[eachItem]._props
    
            if (this.config.globalToggle) 
            {
                if (weaponClassList.includes(items[eachItem]._parent)) 
                {   
    
                    items[eachItem]._props.RecoilForceUp *= this.config.globalVerticalRecoil
                    items[eachItem]._props.RecoilForceBack *= this.config.globalHorizontalRecoil
                    items[eachItem]._props.Convergence *= this.config.globalConvergence
                    items[eachItem]._props.RecolDispersion *= this.config.globalDispersion
                    items[eachItem]._props.CameraRecoil *= this.config.globalCameraRecoil
                    items[eachItem]._props.CameraSnap *= this.config.globalCameraSnap
                }
            }
            if (this.config.weaponClassToggle)
            {
                if (items[eachItem]._parent == "5447b5cf4bdc2d65278b4567") // Pistols
                {
                    weapon.RecoilForceUp *= this.config.pistolVerticalRecoil
                    weapon.RecoilForceBack *= this.config.pistolHorizontalRecoil
                    weapon.Convergence *= this.config.pistolConvergence
                    weapon.RecolDispersion *= this.config.pistolDispersion
                    weapon.CameraRecoil *= this.config.pistolCameraRecoil
                    weapon.CameraSnap *= this.config.pistolCameraSnap
                }
                if (items[eachItem]._parent == "5447b5e04bdc2d62278b4567") // SMGs
                {
                    weapon.RecoilForceUp *= this.config.smgVerticalRecoil
                    weapon.RecoilForceBack *= this.config.smgHorizontalRecoil
                    weapon.Convergence *= this.config.smgConvergence
                    weapon.RecolDispersion *= this.config.smgDispersion
                    weapon.CameraRecoil *= this.config.smgCameraRecoil
                    weapon.CameraSnap *= this.config.smgCameraSnap
                }
                if (items[eachItem]._parent == "5447b6094bdc2dc3278b4567") // Shotguns
                {
                    weapon.RecoilForceUp *= this.config.shotgunVerticalRecoil
                    weapon.RecoilForceBack *= this.config.shotgunHorizontalRecoil
                    weapon.Convergence *= this.config.shotgunConvergence
                    weapon.RecolDispersion *= this.config.shotgunDispersion
                    weapon.CameraRecoil *= this.config.shotgunCameraRecoil
                    weapon.CameraSnap *= this.config.shotgunCameraSnap
                }
                if (items[eachItem]._parent == "5447b5fc4bdc2d87278b4567") // Assault Carbines
                {
                    weapon.RecoilForceUp *= this.config.carbineVerticalRecoil
                    weapon.RecoilForceBack *= this.config.carbineHorizontalRecoil
                    weapon.Convergence *= this.config.carbineConvergence
                    weapon.RecolDispersion *= this.config.carbineDispersion
                    weapon.CameraRecoil *= this.config.carbineCameraRecoil
                    weapon.CameraSnap *= this.config.carbineCameraSnap
                }
                if (items[eachItem]._parent == "5447b5f14bdc2d61278b4567")  // Assault Rifles
                {
                    weapon.RecoilForceUp *= this.config.rifleVerticalRecoil
                    weapon.RecoilForceBack *= this.config.rifleHorizontalRecoil
                    weapon.Convergence *= this.config.rifleConvergence
                    weapon.RecolDispersion *= this.config.rifleDispersion
                    weapon.CameraRecoil *= this.config.rifleCameraRecoil
                    weapon.CameraSnap *= this.config.rifleCameraSnap
                }
                if (items[eachItem]._parent == "5447bed64bdc2d97278b4568")  // LMGs
                {
                    weapon.RecoilForceUp *= this.config.mgVerticalRecoil
                    weapon.RecoilForceBack *= this.config.mgHorizontalRecoil
                    weapon.Convergence *= this.config.mgConvergence
                    weapon.RecolDispersion *= this.config.mgDispersion
                    weapon.CameraRecoil *= this.config.mgCameraRecoil
                    weapon.CameraSnap *= this.config.mgCameraSnap
                }
                if (items[eachItem]._parent == "5447b6194bdc2d67278b4567") // Marksman Rifles
                {
                    weapon.RecoilForceUp *= this.config.marksmanVerticalRecoil
                    weapon.RecoilForceBack *= this.config.marksmanHorizontalRecoil
                    weapon.Convergence *= this.config.marksmanConvergence
                    weapon.RecolDispersion *= this.config.marksmanDispersion
                    weapon.CameraRecoil *= this.config.marksmanCameraRecoil
                    weapon.CameraSnap *= this.config.marksmanCameraSnap
                }
                if (items[eachItem]._parent == "5447b6254bdc2dc3278b4568")  // Sniper Rifles
                {
                    weapon.RecoilForceUp *= this.config.sniperVerticalRecoil
                    weapon.RecoilForceBack *= this.config.sniperHorizontalRecoil
                    weapon.Convergence *= this.config.sniperConvergence
                    weapon.RecolDispersion *= this.config.sniperDispersion
                    weapon.CameraRecoil *= this.config.sniperCameraRecoil
                    weapon.CameraSnap *= this.config.sniperCameraSnap
                }
            }
            if (this.config.individualWeaponToggle)
            {

                // ASSAULT RIFLES //

                if (items[eachItem]._id == adar) // ADAR
                {
                    items[adar]._props.RecoilForceUp *= this.config.adarVerticalRecoil
                    items[adar]._props.RecoilForceBack *= this.config.adarHorizontalRecoil
                    items[adar]._props.Convergence *= this.config.adarConvergence
                    items[adar]._props.RecolDispersion *= this.config.adarDispersion
                    items[adar]._props.CameraRecoil *= this.config.adarCameraRecoil
                    items[adar]._props.CameraSnap *= this.config.adarCameraSnap
                }
                if (items[eachItem]._id == ak101) // AK-101
                {
                    items[ak101]._props.RecoilForceUp *= this.config.ak101VerticalRecoil
                    items[ak101]._props.RecoilForceBack *= this.config.ak101HorizontalRecoil
                    items[ak101]._props.Convergence *= this.config.ak101Convergence
                    items[ak101]._props.RecolDispersion *= this.config.ak101Dispersion
                    items[ak101]._props.CameraRecoil *= this.config.ak101CameraRecoil
                    items[ak101]._props.CameraSnap *= this.config.ak101CameraSnap
                }
                if (items[eachItem]._id == ak102) // AK-102
                {
                    items[ak102]._props.RecoilForceUp *= this.config.ak102VerticalRecoil
                    items[ak102]._props.RecoilForceBack *= this.config.ak102HorizontalRecoil
                    items[ak102]._props.Convergence *= this.config.ak102Convergence
                    items[ak102]._props.RecolDispersion *= this.config.ak102Dispersion
                    items[ak102]._props.CameraRecoil *= this.config.ak102CameraRecoil
                    items[ak102]._props.CameraSnap *= this.config.ak102CameraSnap
                }
                if (items[eachItem]._id == ak103) // AK-103
                {
                    items[ak103]._props.RecoilForceUp *= this.config.ak103VerticalRecoil
                    items[ak103]._props.RecoilForceBack *= this.config.ak103HorizontalRecoil
                    items[ak103]._props.Convergence *= this.config.ak103Convergence
                    items[ak103]._props.RecolDispersion *= this.config.ak103Dispersion
                    items[ak103]._props.CameraRecoil *= this.config.ak103CameraRecoil
                    items[ak103]._props.CameraSnap *= this.config.ak103CameraSnap
                }
                if (items[eachItem]._id == ak104) // AK-104
                {
                    items[ak104]._props.RecoilForceUp *= this.config.ak104VerticalRecoil
                    items[ak104]._props.RecoilForceBack *= this.config.ak104HorizontalRecoil
                    items[ak104]._props.Convergence *= this.config.ak104Convergence
                    items[ak104]._props.RecolDispersion *= this.config.ak104Dispersion
                    items[ak104]._props.CameraRecoil *= this.config.ak104CameraRecoil
                    items[ak104]._props.CameraSnap *= this.config.ak104CameraSnap
                }
                if (items[eachItem]._id == ak105) // AK-105
                {
                    items[ak105]._props.RecoilForceUp *= this.config.ak105VerticalRecoil
                    items[ak105]._props.RecoilForceBack *= this.config.ak105HorizontalRecoil
                    items[ak105]._props.Convergence *= this.config.ak105Convergence
                    items[ak105]._props.RecolDispersion *= this.config.ak105Dispersion
                    items[ak105]._props.CameraRecoil *= this.config.ak105CameraRecoil
                    items[ak105]._props.CameraSnap *= this.config.ak105CameraSnap
                }
                if (items[eachItem]._id == ak74) // AK-74
                {
                    items[ak74]._props.RecoilForceUp *= this.config.ak74VerticalRecoil
                    items[ak74]._props.RecoilForceBack *= this.config.ak74HorizontalRecoil
                    items[ak74]._props.Convergence *= this.config.ak74Convergence
                    items[ak74]._props.RecolDispersion *= this.config.ak74Dispersion
                    items[ak74]._props.CameraRecoil *= this.config.ak74CameraRecoil
                    items[ak74]._props.CameraSnap *= this.config.ak74CameraSnap
                }
                if (items[eachItem]._id == ak74m) // AK-74M
                {
                    items[ak74m]._props.RecoilForceUp *= this.config.ak74mVerticalRecoil
                    items[ak74m]._props.RecoilForceBack *= this.config.ak74mHorizontalRecoil
                    items[ak74m]._props.Convergence *= this.config.ak74mConvergence
                    items[ak74m]._props.RecolDispersion *= this.config.ak74mDispersion
                    items[ak74m]._props.CameraRecoil *= this.config.ak74mCameraRecoil
                    items[ak74m]._props.CameraSnap *= this.config.ak74mCameraSnap
                }
                if (items[eachItem]._id == ak74n) // AK-74N
                {
                    items[ak74n]._props.RecoilForceUp *= this.config.ak74nVerticalRecoil
                    items[ak74n]._props.RecoilForceBack *= this.config.ak74nHorizontalRecoil
                    items[ak74n]._props.Convergence *= this.config.ak74nConvergence
                    items[ak74n]._props.RecolDispersion *= this.config.ak74nDispersion
                    items[ak74n]._props.CameraRecoil *= this.config.ak74nCameraRecoil
                    items[ak74n]._props.CameraSnap *= this.config.ak74nCameraSnap
                }
                if (items[eachItem]._id == akm) // AKM
                {
                    items[akm]._props.RecoilForceUp *= this.config.akmVerticalRecoil
                    items[akm]._props.RecoilForceBack *= this.config.akmHorizontalRecoil
                    items[akm]._props.Convergence *= this.config.akmConvergence
                    items[akm]._props.RecolDispersion *= this.config.akmDispersion
                    items[akm]._props.CameraRecoil *= this.config.akmCameraRecoil
                    items[akm]._props.CameraSnap *= this.config.akmCameraSnap
                }
                if (items[eachItem]._id == akmn) // AKMN
                {
                    items[akmn]._props.RecoilForceUp *= this.config.akmnVerticalRecoil
                    items[akmn]._props.RecoilForceBack *= this.config.akmnHorizontalRecoil
                    items[akmn]._props.Convergence *= this.config.akmnConvergence
                    items[akmn]._props.RecolDispersion *= this.config.akmnDispersion
                    items[akmn]._props.CameraRecoil *= this.config.akmnCameraRecoil
                    items[akmn]._props.CameraSnap *= this.config.akmnCameraSnap
                }
                if (items[eachItem]._id == akms) // AKMS
                {
                    items[akms]._props.RecoilForceUp *= this.config.akmsVerticalRecoil
                    items[akms]._props.RecoilForceBack *= this.config.akmsHorizontalRecoil
                    items[akms]._props.Convergence *= this.config.akmsConvergence
                    items[akms]._props.RecolDispersion *= this.config.akmsDispersion
                    items[akms]._props.CameraRecoil *= this.config.akmsCameraRecoil
                    items[akms]._props.CameraSnap *= this.config.akmsCameraSnap
                }
                if (items[eachItem]._id == akmsn) // AKMSN
                {
                    items[akmsn]._props.RecoilForceUp *= this.config.akmsnVerticalRecoil
                    items[akmsn]._props.RecoilForceBack *= this.config.akmsnHorizontalRecoil
                    items[akmsn]._props.Convergence *= this.config.akmsnConvergence
                    items[akmsn]._props.RecolDispersion *= this.config.akmsnDispersion
                    items[akmsn]._props.CameraRecoil *= this.config.akmsnCameraRecoil
                    items[akmsn]._props.CameraSnap *= this.config.akmsnCameraSnap
                }
                if (items[eachItem]._id == aks74) // AKS-74
                {
                    items[aks74]._props.RecoilForceUp *= this.config.aks74VerticalRecoil
                    items[aks74]._props.RecoilForceBack *= this.config.aks74HorizontalRecoil
                    items[aks74]._props.Convergence *= this.config.aks74Convergence
                    items[aks74]._props.RecolDispersion *= this.config.aks74Dispersion
                    items[aks74]._props.CameraRecoil *= this.config.aks74CameraRecoil
                    items[aks74]._props.CameraSnap *= this.config.aks74CameraSnap
                }
                if (items[eachItem]._id == aks74n) // AKS-74N
                {
                    items[aks74n]._props.RecoilForceUp *= this.config.aks74nVerticalRecoil
                    items[aks74n]._props.RecoilForceBack *= this.config.aks74nHorizontalRecoil
                    items[aks74n]._props.Convergence *= this.config.aks74nConvergence
                    items[aks74n]._props.RecolDispersion *= this.config.aks74nDispersion
                    items[aks74n]._props.CameraRecoil *= this.config.aks74nCameraRecoil
                    items[aks74n]._props.CameraSnap *= this.config.aks74nCameraSnap
                }
                if (items[eachItem]._id == aks74u) // AKS-74U
                {
                    items[aks74u]._props.RecoilForceUp *= this.config.aks74uVerticalRecoil
                    items[aks74u]._props.RecoilForceBack *= this.config.aks74uHorizontalRecoil
                    items[aks74u]._props.Convergence *= this.config.aks74uConvergence
                    items[aks74u]._props.RecolDispersion *= this.config.aks74uDispersion
                    items[aks74u]._props.CameraRecoil *= this.config.aks74uCameraRecoil
                    items[aks74u]._props.CameraSnap *= this.config.aks74uCameraSnap
                }
                if (items[eachItem]._id == aks74ub) // AKS-74UB
                {
                    items[aks74ub]._props.RecoilForceUp *= this.config.aks74ubVerticalRecoil
                    items[aks74ub]._props.RecoilForceBack *= this.config.aks74ubHorizontalRecoil
                    items[aks74ub]._props.Convergence *= this.config.aks74ubConvergence
                    items[aks74ub]._props.RecolDispersion *= this.config.aks74ubDispersion
                    items[aks74ub]._props.CameraRecoil *= this.config.aks74ubCameraRecoil
                    items[aks74ub]._props.CameraSnap *= this.config.aks74ubCameraSnap
                }
                if (items[eachItem]._id == aks74un) // AKS-74UN
                {
                    items[aks74un]._props.RecoilForceUp *= this.config.aks74unVerticalRecoil
                    items[aks74un]._props.RecoilForceBack *= this.config.aks74unHorizontalRecoil
                    items[aks74un]._props.Convergence *= this.config.aks74unConvergence
                    items[aks74un]._props.RecolDispersion *= this.config.aks74unDispersion
                    items[aks74un]._props.CameraRecoil *= this.config.aks74unCameraRecoil
                    items[aks74un]._props.CameraSnap *= this.config.aks74unCameraSnap
                }
                if (items[eachItem]._id == ash) // ASh-12
                {
                    items[ash]._props.RecoilForceUp *= this.config.ashVerticalRecoil
                    items[ash]._props.RecoilForceBack *= this.config.ashHorizontalRecoil
                    items[ash]._props.Convergence *= this.config.ashConvergence
                    items[ash]._props.RecolDispersion *= this.config.ashDispersion
                    items[ash]._props.CameraRecoil *= this.config.ashCameraRecoil
                    items[ash]._props.CameraSnap *= this.config.ashCameraSnap
                }
                if (items[eachItem]._id == aug1) // AUG A1
                {
                    items[aug1]._props.RecoilForceUp *= this.config.aug1VerticalRecoil
                    items[aug1]._props.RecoilForceBack *= this.config.aug1HorizontalRecoil
                    items[aug1]._props.Convergence *= this.config.aug1Convergence
                    items[aug1]._props.RecolDispersion *= this.config.aug1Dispersion
                    items[aug1]._props.CameraRecoil *= this.config.aug1CameraRecoil
                    items[aug1]._props.CameraSnap *= this.config.aug1CameraSnap
                }
                if (items[eachItem]._id == aug3) // AUG A3
                {
                    items[aug3]._props.RecoilForceUp *= this.config.aug3VerticalRecoil
                    items[aug3]._props.RecoilForceBack *= this.config.aug3HorizontalRecoil
                    items[aug3]._props.Convergence *= this.config.aug3Convergence
                    items[aug3]._props.RecolDispersion *= this.config.aug3Dispersion
                    items[aug3]._props.CameraRecoil *= this.config.aug3CameraRecoil
                    items[aug3]._props.CameraSnap *= this.config.aug3CameraSnap
                }
                if (items[eachItem]._id == mdr556) // MDR 5.56x45
                {
                    items[mdr556]._props.RecoilForceUp *= this.config.mdr556VerticalRecoil
                    items[mdr556]._props.RecoilForceBack *= this.config.mdr556HorizontalRecoil
                    items[mdr556]._props.Convergence *= this.config.mdr556Convergence
                    items[mdr556]._props.RecolDispersion *= this.config.mdr556Dispersion
                    items[mdr556]._props.CameraRecoil *= this.config.mdr556CameraRecoil
                    items[mdr556]._props.CameraSnap *= this.config.mdr556CameraSnap
                }
                if (items[eachItem]._id == mdr762) // MDR 7.62x51
                {
                    items[mdr762]._props.RecoilForceUp *= this.config.mdr762VerticalRecoil
                    items[mdr762]._props.RecoilForceBack *= this.config.mdr762HorizontalRecoil
                    items[mdr762]._props.Convergence *= this.config.mdr762Convergence
                    items[mdr762]._props.RecolDispersion *= this.config.mdr762Dispersion
                    items[mdr762]._props.CameraRecoil *= this.config.mdr762CameraRecoil
                    items[mdr762]._props.CameraSnap *= this.config.mdr762CameraSnap
                }
                if (items[eachItem]._id == hk416) // HK 416A5
                {
                    items[hk416]._props.RecoilForceUp *= this.config.hk416VerticalRecoil
                    items[hk416]._props.RecoilForceBack *= this.config.hk416HorizontalRecoil
                    items[hk416]._props.Convergence *= this.config.hk416Convergence
                    items[hk416]._props.RecolDispersion *= this.config.hk416Dispersion
                    items[hk416]._props.CameraRecoil *= this.config.hk416CameraRecoil
                    items[hk416]._props.CameraSnap *= this.config.hk416CameraSnap
                }
                if (items[eachItem]._id == g36) // HK G36
                {
                    items[g36]._props.RecoilForceUp *= this.config.g36VerticalRecoil
                    items[g36]._props.RecoilForceBack *= this.config.g36HorizontalRecoil
                    items[g36]._props.Convergence *= this.config.g36Convergence
                    items[g36]._props.RecolDispersion *= this.config.g36Dispersion
                    items[g36]._props.CameraRecoil *= this.config.g36CameraRecoil
                    items[g36]._props.CameraSnap *= this.config.g36CameraSnap
                }
                if (items[eachItem]._id == m4a1) // M4A1
                {
                    items[m4a1]._props.RecoilForceUp *= this.config.m4a1VerticalRecoil
                    items[m4a1]._props.RecoilForceBack *= this.config.m4a1HorizontalRecoil
                    items[m4a1]._props.Convergence *= this.config.m4a1Convergence
                    items[m4a1]._props.RecolDispersion *= this.config.m4a1Dispersion
                    items[m4a1]._props.CameraRecoil *= this.config.m4a1CameraRecoil
                    items[m4a1]._props.CameraSnap *= this.config.m4a1CameraSnap
                }
                if (items[eachItem]._id == mcx) // MCX
                {
                    items[mcx]._props.RecoilForceUp *= this.config.mcxVerticalRecoil
                    items[mcx]._props.RecoilForceBack *= this.config.mcxHorizontalRecoil
                    items[mcx]._props.Convergence *= this.config.mcxConvergence
                    items[mcx]._props.RecolDispersion *= this.config.mcxDispersion
                    items[mcx]._props.CameraRecoil *= this.config.mcxCameraRecoil
                    items[mcx]._props.CameraSnap *= this.config.mcxCameraSnap
                }
                if (items[eachItem]._id == mk47) // Mk47
                {
                    items[mk47]._props.RecoilForceUp *= this.config.mk47VerticalRecoil
                    items[mk47]._props.RecoilForceBack *= this.config.mk47HorizontalRecoil
                    items[mk47]._props.Convergence *= this.config.mk47Convergence
                    items[mk47]._props.RecolDispersion *= this.config.mk47Dispersion
                    items[mk47]._props.CameraRecoil *= this.config.mk47CameraRecoil
                    items[mk47]._props.CameraSnap *= this.config.mk47CameraSnap
                }
                if (items[eachItem]._id == rd) // RD-704
                {
                    items[rd]._props.RecoilForceUp *= this.config.rdVerticalRecoil
                    items[rd]._props.RecoilForceBack *= this.config.rdHorizontalRecoil
                    items[rd]._props.Convergence *= this.config.rdConvergence
                    items[rd]._props.RecolDispersion *= this.config.rdDispersion
                    items[rd]._props.CameraRecoil *= this.config.rdCameraRecoil
                    items[rd]._props.CameraSnap *= this.config.rdCameraSnap
                }
                if (items[eachItem]._id == sa58) // SA-58
                {
                    items[sa58]._props.RecoilForceUp *= this.config.sa58VerticalRecoil
                    items[sa58]._props.RecoilForceBack *= this.config.sa58HorizontalRecoil
                    items[sa58]._props.Convergence *= this.config.sa58Convergence
                    items[sa58]._props.RecolDispersion *= this.config.sa58Dispersion
                    items[sa58]._props.CameraRecoil *= this.config.sa58CameraRecoil
                    items[sa58]._props.CameraSnap *= this.config.sa58CameraSnap
                }
                if (items[eachItem]._id == sagak) // SAG AK
                {
                    items[sagak]._props.RecoilForceUp *= this.config.sagakVerticalRecoil
                    items[sagak]._props.RecoilForceBack *= this.config.sagakHorizontalRecoil
                    items[sagak]._props.Convergence *= this.config.sagakConvergence
                    items[sagak]._props.RecolDispersion *= this.config.sagakDispersion
                    items[sagak]._props.CameraRecoil *= this.config.sagakCameraRecoil
                    items[sagak]._props.CameraSnap *= this.config.sagakCameraSnap
                }
                if (items[eachItem]._id == sagaks) // SAG AK Short
                {
                    items[sagaks]._props.RecoilForceUp *= this.config.sagaksVerticalRecoil
                    items[sagaks]._props.RecoilForceBack *= this.config.sagaksHorizontalRecoil
                    items[sagaks]._props.Convergence *= this.config.sagaksConvergence
                    items[sagaks]._props.RecolDispersion *= this.config.sagaksDispersion
                    items[sagaks]._props.CameraRecoil *= this.config.sagaksCameraRecoil
                    items[sagaks]._props.CameraSnap *= this.config.sagaksCameraSnap
                }
                if (items[eachItem]._id == scarh) // SCAR-H
                {
                    items[scarh]._props.RecoilForceUp *= this.config.scarhVerticalRecoil
                    items[scarh]._props.RecoilForceBack *= this.config.scarhHorizontalRecoil
                    items[scarh]._props.Convergence *= this.config.scarhConvergence
                    items[scarh]._props.RecolDispersion *= this.config.scarhDispersion
                    items[scarh]._props.CameraRecoil *= this.config.scarhCameraRecoil
                    items[scarh]._props.CameraSnap *= this.config.scarhCameraSnap
    
                    items[scarhd]._props.RecoilForceUp *= this.config.scarhVerticalRecoil
                    items[scarhd]._props.RecoilForceBack *= this.config.scarhHorizontalRecoil
                    items[scarhd]._props.Convergence *= this.config.scarhConvergence
                    items[scarhd]._props.RecolDispersion *= this.config.scarhDispersion
                    items[scarhd]._props.CameraRecoil *= this.config.scarhCameraRecoil
                    items[scarhd]._props.CameraSnap *= this.config.scarhCameraSnap
                }
                if (items[eachItem]._id == scarl) // SCAR-L
                {
                    items[scarl]._props.RecoilForceUp *= this.config.scarlVerticalRecoil
                    items[scarl]._props.RecoilForceBack *= this.config.scarlHorizontalRecoil
                    items[scarl]._props.Convergence *= this.config.scarlConvergence
                    items[scarl]._props.RecolDispersion *= this.config.scarlDispersion
                    items[scarl]._props.CameraRecoil *= this.config.scarlCameraRecoil
                    items[scarl]._props.CameraSnap *= this.config.scarlCameraSnap
    
                    items[scarld]._props.RecoilForceUp *= this.config.scarlVerticalRecoil
                    items[scarld]._props.RecoilForceBack *= this.config.scarlHorizontalRecoil
                    items[scarld]._props.Convergence *= this.config.scarlConvergence
                    items[scarld]._props.RecolDispersion *= this.config.scarlDispersion
                    items[scarld]._props.CameraRecoil *= this.config.scarlCameraRecoil
                    items[scarld]._props.CameraSnap *= this.config.scarlCameraSnap
                }
                if (items[eachItem]._id == tx15) // TX-15 DML
                {
                    items[tx15]._props.RecoilForceUp *= this.config.tx15VerticalRecoil
                    items[tx15]._props.RecoilForceBack *= this.config.tx15HorizontalRecoil
                    items[tx15]._props.Convergence *= this.config.tx15Convergence
                    items[tx15]._props.RecolDispersion *= this.config.tx15Dispersion
                    items[tx15]._props.CameraRecoil *= this.config.tx15CameraRecoil
                    items[tx15]._props.CameraSnap *= this.config.tx15CameraSnap
                }
                if (items[eachItem]._id == vpo209) // Vepr AKM/VPO-209
                {
                    items[vpo209]._props.RecoilForceUp *= this.config.vpo209VerticalRecoil
                    items[vpo209]._props.RecoilForceBack *= this.config.vpo209HorizontalRecoil
                    items[vpo209]._props.Convergence *= this.config.vpo209Convergence
                    items[vpo209]._props.RecolDispersion *= this.config.vpo209Dispersion
                    items[vpo209]._props.CameraRecoil *= this.config.vpo209CameraRecoil
                    items[vpo209]._props.CameraSnap *= this.config.vpo209CameraSnap
                }
                if (items[eachItem]._id == vpo136) // Vepr KM/VPO-136
                {
                    items[vpo136]._props.RecoilForceUp *= this.config.vpo136VerticalRecoil
                    items[vpo136]._props.RecoilForceBack *= this.config.vpo136HorizontalRecoil
                    items[vpo136]._props.Convergence *= this.config.vpo136Convergence
                    items[vpo136]._props.RecolDispersion *= this.config.vpo136Dispersion
                    items[vpo136]._props.CameraRecoil *= this.config.vpo136CameraRecoil
                    items[vpo136]._props.CameraSnap *= this.config.vpo136CameraSnap
                }
    
                // ASSAULT CARBINES //
    
                if (items[eachItem]._id == val) // AS VAL
                {
                    items[val]._props.RecoilForceUp *= this.config.valVerticalRecoil
                    items[val]._props.RecoilForceBack *= this.config.valHorizontalRecoil
                    items[val]._props.Convergence *= this.config.valConvergence
                    items[val]._props.RecolDispersion *= this.config.valDispersion
                    items[val]._props.CameraRecoil *= this.config.valCameraRecoil
                    items[val]._props.CameraSnap *= this.config.valCameraSnap
                }
                if (items[eachItem]._id == opsks) // OP-SKS
                {
                    items[opsks]._props.RecoilForceUp *= this.config.opsksVerticalRecoil
                    items[opsks]._props.RecoilForceBack *= this.config.opsksHorizontalRecoil
                    items[opsks]._props.Convergence *= this.config.opsksConvergence
                    items[opsks]._props.RecolDispersion *= this.config.opsksDispersion
                    items[opsks]._props.CameraRecoil *= this.config.opsksCameraRecoil
                    items[opsks]._props.CameraSnap *= this.config.opsksCameraSnap
                }
                if (items[eachItem]._id == sks) // SKS
                {
                    items[sks]._props.RecoilForceUp *= this.config.sksVerticalRecoil
                    items[sks]._props.RecoilForceBack *= this.config.sksHorizontalRecoil
                    items[sks]._props.Convergence *= this.config.sksConvergence
                    items[sks]._props.RecolDispersion *= this.config.sksDispersion
                    items[sks]._props.CameraRecoil *= this.config.sksCameraRecoil
                    items[sks]._props.CameraSnap *= this.config.sksCameraSnap
                }
                if (items[eachItem]._id == vpo101) // Vepr Hunter/VPO-101
                {
                    items[vpo101]._props.RecoilForceUp *= this.config.vpo101VerticalRecoil
                    items[vpo101]._props.RecoilForceBack *= this.config.vpo101HorizontalRecoil
                    items[vpo101]._props.Convergence *= this.config.vpo101Convergence
                    items[vpo101]._props.RecolDispersion *= this.config.vpo101Dispersion
                    items[vpo101]._props.CameraRecoil *= this.config.vpo101CameraRecoil
                    items[vpo101]._props.CameraSnap *= this.config.vpo101CameraSnap
                }
    
                // LIGHT MACHINE GUNS (LMG) //
                    
                if (items[eachItem]._id == rpk) // RPK
                {
                    items[rpk]._props.RecoilForceUp *= this.config.rpkVerticalRecoil
                    items[rpk]._props.RecoilForceBack *= this.config.rpkHorizontalRecoil
                    items[rpk]._props.Convergence *= this.config.rpkConvergence
                    items[rpk]._props.RecolDispersion *= this.config.rpkDispersion
                    items[rpk]._props.CameraRecoil *= this.config.rpkCameraRecoil
                    items[rpk]._props.CameraSnap *= this.config.rpkCameraSnap
                }
    
                // SUBMACHINE GUNS (SMG) //
    
                if (items[eachItem]._id == mp5) // MP5
                {
                    items[mp5]._props.RecoilForceUp *= this.config.mp5VerticalRecoil
                    items[mp5]._props.RecoilForceBack *= this.config.mp5HorizontalRecoil
                    items[mp5]._props.Convergence *= this.config.mp5Convergence
                    items[mp5]._props.RecolDispersion *= this.config.mp5Dispersion
                    items[mp5]._props.CameraRecoil *= this.config.mp5CameraRecoil
                    items[mp5]._props.CameraSnap *= this.config.mp5CameraSnap
                }
                if (items[eachItem]._id == mp5k) // MP5K-N
                {
                    items[mp5k]._props.RecoilForceUp *= this.config.mp5kVerticalRecoil
                    items[mp5k]._props.RecoilForceBack *= this.config.mp5kHorizontalRecoil
                    items[mp5k]._props.Convergence *= this.config.mp5kConvergence
                    items[mp5k]._props.RecolDispersion *= this.config.mp5kDispersion
                    items[mp5k]._props.CameraRecoil *= this.config.mp5kCameraRecoil
                    items[mp5k]._props.CameraSnap *= this.config.mp5kCameraSnap
                }
                if (items[eachItem]._id == mp7a1) // MP7A1
                {
                    items[mp7a1]._props.RecoilForceUp *= this.config.mp7a1VerticalRecoil
                    items[mp7a1]._props.RecoilForceBack *= this.config.mp7a1HorizontalRecoil
                    items[mp7a1]._props.Convergence *= this.config.mp7a1Convergence
                    items[mp7a1]._props.RecolDispersion *= this.config.mp7a1Dispersion
                    items[mp7a1]._props.CameraRecoil *= this.config.mp7a1CameraRecoil
                    items[mp7a1]._props.CameraSnap *= this.config.mp7a1CameraSnap
                }
                if (items[eachItem]._id == mp7a2) // MP7A2
                {
                    items[mp7a2]._props.RecoilForceUp *= this.config.mp7a2VerticalRecoil
                    items[mp7a2]._props.RecoilForceBack *= this.config.mp7a2HorizontalRecoil
                    items[mp7a2]._props.Convergence *= this.config.mp7a2Convergence
                    items[mp7a2]._props.RecolDispersion *= this.config.mp7a2Dispersion
                    items[mp7a2]._props.CameraRecoil *= this.config.mp7a2CameraRecoil
                    items[mp7a2]._props.CameraSnap *= this.config.mp7a2CameraSnap
                }
                if (items[eachItem]._id == mp9) // MP9
                {
                    items[mp9]._props.RecoilForceUp *= this.config.mp9VerticalRecoil
                    items[mp9]._props.RecoilForceBack *= this.config.mp9HorizontalRecoil
                    items[mp9]._props.Convergence *= this.config.mp9Convergence
                    items[mp9]._props.RecolDispersion *= this.config.mp9Dispersion
                    items[mp9]._props.CameraRecoil *= this.config.mp9CameraRecoil
                    items[mp9]._props.CameraSnap *= this.config.mp9CameraSnap
                }
                if (items[eachItem]._id == mp9n) // MP9-N
                {
                    items[mp9n]._props.RecoilForceUp *= this.config.mp9nVerticalRecoil
                    items[mp9n]._props.RecoilForceBack *= this.config.mp9nHorizontalRecoil
                    items[mp9n]._props.Convergence *= this.config.mp9nConvergence
                    items[mp9n]._props.RecolDispersion *= this.config.mp9nDispersion
                    items[mp9n]._props.CameraRecoil *= this.config.mp9nCameraRecoil
                    items[mp9n]._props.CameraSnap *= this.config.mp9nCameraSnap
                }
                if (items[eachItem]._id == mpx) // MPX
                {
                    items[mpx]._props.RecoilForceUp *= this.config.mpxVerticalRecoil
                    items[mpx]._props.RecoilForceBack *= this.config.mpxHorizontalRecoil
                    items[mpx]._props.Convergence *= this.config.mpxConvergence
                    items[mpx]._props.RecolDispersion *= this.config.mpxDispersion
                    items[mpx]._props.CameraRecoil *= this.config.mpxCameraRecoil
                    items[mpx]._props.CameraSnap *= this.config.mpxCameraSnap
                }
                if (items[eachItem]._id == p90) // P90
                {
                    items[p90]._props.RecoilForceUp *= this.config.p90VerticalRecoil
                    items[p90]._props.RecoilForceBack *= this.config.p90HorizontalRecoil
                    items[p90]._props.Convergence *= this.config.p90Convergence
                    items[p90]._props.RecolDispersion *= this.config.p90Dispersion
                    items[p90]._props.CameraRecoil *= this.config.p90CameraRecoil
                    items[p90]._props.CameraSnap *= this.config.p90CameraSnap
                }
                if (items[eachItem]._id == pp19) // PP-19-01 Vityaz-SN
                {
                    items[pp19]._props.RecoilForceUp *= this.config.pp19VerticalRecoil
                    items[pp19]._props.RecoilForceBack *= this.config.pp19HorizontalRecoil
                    items[pp19]._props.Convergence *= this.config.pp19Convergence
                    items[pp19]._props.RecolDispersion *= this.config.pp19Dispersion
                    items[pp19]._props.CameraRecoil *= this.config.pp19CameraRecoil
                    items[pp19]._props.CameraSnap *= this.config.pp19CameraSnap
                }
                if (items[eachItem]._id == pp9) // PP-9 "Klin"
                {
                    items[pp9]._props.RecoilForceUp *= this.config.pp9VerticalRecoil
                    items[pp9]._props.RecoilForceBack *= this.config.pp9HorizontalRecoil
                    items[pp9]._props.Convergence *= this.config.pp9Convergence
                    items[pp9]._props.RecolDispersion *= this.config.pp9Dispersion
                    items[pp9]._props.CameraRecoil *= this.config.pp9CameraRecoil
                    items[pp9]._props.CameraSnap *= this.config.pp9CameraSnap
                }
                if (items[eachItem]._id == pp91) // PP-91 "Kedr"
                {
                    items[pp91]._props.RecoilForceUp *= this.config.pp91VerticalRecoil
                    items[pp91]._props.RecoilForceBack *= this.config.pp91HorizontalRecoil
                    items[pp91]._props.Convergence *= this.config.pp91Convergence
                    items[pp91]._props.RecolDispersion *= this.config.pp91Dispersion
                    items[pp91]._props.CameraRecoil *= this.config.pp91CameraRecoil
                    items[pp91]._props.CameraSnap *= this.config.pp91CameraSnap
                }
                if (items[eachItem]._id == pp9101) // PP-91-01 "Kedr-B"
                {
                    items[pp9101]._props.RecoilForceUp *= this.config.pp9101VerticalRecoil
                    items[pp9101]._props.RecoilForceBack *= this.config.pp9101HorizontalRecoil
                    items[pp9101]._props.Convergence *= this.config.pp9101Convergence
                    items[pp9101]._props.RecolDispersion *= this.config.pp9101Dispersion
                    items[pp9101]._props.CameraRecoil *= this.config.pp9101CameraRecoil
                    items[pp9101]._props.CameraSnap *= this.config.pp9101CameraSnap
                }
                if (items[eachItem]._id == ppsh) // PPSH-41
                {
                    items[ppsh]._props.RecoilForceUp *= this.config.ppshVerticalRecoil
                    items[ppsh]._props.RecoilForceBack *= this.config.ppshHorizontalRecoil
                    items[ppsh]._props.Convergence *= this.config.ppshConvergence
                    items[ppsh]._props.RecolDispersion *= this.config.ppshDispersion
                    items[ppsh]._props.CameraRecoil *= this.config.ppshCameraRecoil
                    items[ppsh]._props.CameraSnap *= this.config.ppshCameraSnap
                }
                if (items[eachItem]._id == saiga9) // Saiga-9
                {
                    items[saiga9]._props.RecoilForceUp *= this.config.saiga9VerticalRecoil
                    items[saiga9]._props.RecoilForceBack *= this.config.saiga9HorizontalRecoil
                    items[saiga9]._props.Convergence *= this.config.saiga9Convergence
                    items[saiga9]._props.RecolDispersion *= this.config.saiga9Dispersion
                    items[saiga9]._props.CameraRecoil *= this.config.saiga9CameraRecoil
                    items[saiga9]._props.CameraSnap *= this.config.saiga9CameraSnap
                }
                if (items[eachItem]._id == sr2m) // SR-2M
                {
                    items[sr2m]._props.RecoilForceUp *= this.config.sr2mVerticalRecoil
                    items[sr2m]._props.RecoilForceBack *= this.config.sr2mHorizontalRecoil
                    items[sr2m]._props.Convergence *= this.config.sr2mConvergence
                    items[sr2m]._props.RecolDispersion *= this.config.sr2mDispersion
                    items[sr2m]._props.CameraRecoil *= this.config.sr2mCameraRecoil
                    items[sr2m]._props.CameraSnap *= this.config.sr2mCameraSnap
                }
                if (items[eachItem]._id == stm) // STM-9
                {
                    items[stm]._props.RecoilForceUp *= this.config.stmVerticalRecoil
                    items[stm]._props.RecoilForceBack *= this.config.stmHorizontalRecoil
                    items[stm]._props.Convergence *= this.config.stmConvergence
                    items[stm]._props.RecolDispersion *= this.config.stmDispersion
                    items[stm]._props.CameraRecoil *= this.config.stmCameraRecoil
                    items[stm]._props.CameraSnap *= this.config.stmCameraSnap
                }
                if (items[eachItem]._id == ump) // UMP-45
                {
                    items[ump]._props.RecoilForceUp *= this.config.umpVerticalRecoil
                    items[ump]._props.RecoilForceBack *= this.config.umpHorizontalRecoil
                    items[ump]._props.Convergence *= this.config.umpConvergence
                    items[ump]._props.RecolDispersion *= this.config.umpDispersion
                    items[ump]._props.CameraRecoil *= this.config.umpCameraRecoil
                    items[ump]._props.CameraSnap *= this.config.umpCameraSnap
                }
                if (items[eachItem]._id == vector45) // Vector .45
                {
                    items[vector45]._props.RecoilForceUp *= this.config.vector45VerticalRecoil
                    items[vector45]._props.RecoilForceBack *= this.config.vector45HorizontalRecoil
                    items[vector45]._props.Convergence *= this.config.vector45Convergence
                    items[vector45]._props.RecolDispersion *= this.config.vector45Dispersion
                    items[vector45]._props.CameraRecoil *= this.config.vector45CameraRecoil
                    items[vector45]._props.CameraSnap *= this.config.vector45CameraSnap
                }
                if (items[eachItem]._id == vector9x19) // Vector 9x19
                {
                    items[vector9x19]._props.RecoilForceUp *= this.config.vector9x19VerticalRecoil
                    items[vector9x19]._props.RecoilForceBack *= this.config.vector9x19HorizontalRecoil
                    items[vector9x19]._props.Convergence *= this.config.vector9x19Convergence
                    items[vector9x19]._props.RecolDispersion *= this.config.vector9x19Dispersion
                    items[vector9x19]._props.CameraRecoil *= this.config.vector9x19CameraRecoil
                    items[vector9x19]._props.CameraSnap *= this.config.vector9x19CameraSnap
                }
    
                // SHOTGUNS //
    
                if (items[eachItem]._id == ks) // KS-23M
                {
                    items[ks]._props.RecoilForceUp *= this.config.ksVerticalRecoil
                    items[ks]._props.RecoilForceBack *= this.config.ksHorizontalRecoil
                    items[ks]._props.Convergence *= this.config.ksConvergence
                    items[ks]._props.RecolDispersion *= this.config.ksDispersion
                    items[ks]._props.CameraRecoil *= this.config.ksCameraRecoil
                    items[ks]._props.CameraSnap *= this.config.ksCameraSnap
                }
                if (items[eachItem]._id == m3) // M3 Super 90
                {
                    items[m3]._props.RecoilForceUp *= this.config.m3VerticalRecoil
                    items[m3]._props.RecoilForceBack *= this.config.m3HorizontalRecoil
                    items[m3]._props.Convergence *= this.config.m3Convergence
                    items[m3]._props.RecolDispersion *= this.config.m3Dispersion
                    items[m3]._props.CameraRecoil *= this.config.m3CameraRecoil
                    items[m3]._props.CameraSnap *= this.config.m3CameraSnap
                }
                if (items[eachItem]._id == m590) // M590A1
                {
                    items[m590]._props.RecoilForceUp *= this.config.m590VerticalRecoil
                    items[m590]._props.RecoilForceBack *= this.config.m590HorizontalRecoil
                    items[m590]._props.Convergence *= this.config.m590Convergence
                    items[m590]._props.RecolDispersion *= this.config.m590Dispersion
                    items[m590]._props.CameraRecoil *= this.config.m590CameraRecoil
                    items[m590]._props.CameraSnap *= this.config.m590CameraSnap
                }
                if (items[eachItem]._id == m870) // M870
                {
                    items[m870]._props.RecoilForceUp *= this.config.m870VerticalRecoil
                    items[m870]._props.RecoilForceBack *= this.config.m870HorizontalRecoil
                    items[m870]._props.Convergence *= this.config.m870Convergence
                    items[m870]._props.RecolDispersion *= this.config.m870Dispersion
                    items[m870]._props.CameraRecoil *= this.config.m870CameraRecoil
                    items[m870]._props.CameraSnap *= this.config.m870CameraSnap
                }
                if (items[eachItem]._id == mp133) // MP-133
                {
                    items[mp133]._props.RecoilForceUp *= this.config.mp133VerticalRecoil
                    items[mp133]._props.RecoilForceBack *= this.config.mp133HorizontalRecoil
                    items[mp133]._props.Convergence *= this.config.mp133Convergence
                    items[mp133]._props.RecolDispersion *= this.config.mp133Dispersion
                    items[mp133]._props.CameraRecoil *= this.config.mp133CameraRecoil
                    items[mp133]._props.CameraSnap *= this.config.mp133CameraSnap
                }
                if (items[eachItem]._id == mp153) // MP-153
                {
                    items[mp153]._props.RecoilForceUp *= this.config.mp153VerticalRecoil
                    items[mp153]._props.RecoilForceBack *= this.config.mp153HorizontalRecoil
                    items[mp153]._props.Convergence *= this.config.mp153Convergence
                    items[mp153]._props.RecolDispersion *= this.config.mp153Dispersion
                    items[mp153]._props.CameraRecoil *= this.config.mp153CameraRecoil
                    items[mp153]._props.CameraSnap *= this.config.mp153CameraSnap
                }
                if (items[eachItem]._id == mp155) // MP-155
                {
                    items[mp155]._props.RecoilForceUp *= this.config.mp155VerticalRecoil
                    items[mp155]._props.RecoilForceBack *= this.config.mp155HorizontalRecoil
                    items[mp155]._props.Convergence *= this.config.mp155Convergence
                    items[mp155]._props.RecolDispersion *= this.config.mp155Dispersion
                    items[mp155]._props.CameraRecoil *= this.config.mp155CameraRecoil
                    items[mp155]._props.CameraSnap *= this.config.mp155CameraSnap
                }
                if (items[eachItem]._id == mp43) // MP-43-1C
                {
                    items[mp43]._props.RecoilForceUp *= this.config.mp43VerticalRecoil
                    items[mp43]._props.RecoilForceBack *= this.config.mp43HorizontalRecoil
                    items[mp43]._props.Convergence *= this.config.mp43Convergence
                    items[mp43]._props.RecolDispersion *= this.config.mp43Dispersion
                    items[mp43]._props.CameraRecoil *= this.config.mp43CameraRecoil
                    items[mp43]._props.CameraSnap *= this.config.mp43CameraSnap
                }
                if (items[eachItem]._id == mts) // MTs-255-12
                {
                    items[mts]._props.RecoilForceUp *= this.config.mtsVerticalRecoil
                    items[mts]._props.RecoilForceBack *= this.config.mtsHorizontalRecoil
                    items[mts]._props.Convergence *= this.config.mtsConvergence
                    items[mts]._props.RecolDispersion *= this.config.mtsDispersion
                    items[mts]._props.CameraRecoil *= this.config.mtsCameraRecoil
                    items[mts]._props.CameraSnap *= this.config.mtsCameraSnap
                }
                if (items[eachItem]._id == saiga12) // Saiga-12
                {
                    items[saiga12]._props.RecoilForceUp *= this.config.saiga12VerticalRecoil
                    items[saiga12]._props.RecoilForceBack *= this.config.saiga12HorizontalRecoil
                    items[saiga12]._props.Convergence *= this.config.saiga12Convergence
                    items[saiga12]._props.RecolDispersion *= this.config.saiga12Dispersion
                    items[saiga12]._props.CameraRecoil *= this.config.saiga12CameraRecoil
                    items[saiga12]._props.CameraSnap *= this.config.saiga12CameraSnap
                }
                if (items[eachItem]._id == toz) // TOZ-106
                {
                    items[toz]._props.RecoilForceUp *= this.config.tozVerticalRecoil
                    items[toz]._props.RecoilForceBack *= this.config.tozHorizontalRecoil
                    items[toz]._props.Convergence *= this.config.tozConvergence
                    items[toz]._props.RecolDispersion *= this.config.tozDispersion
                    items[toz]._props.CameraRecoil *= this.config.tozCameraRecoil
                    items[toz]._props.CameraSnap *= this.config.tozCameraSnap
                }
    
                // DESIGNATED MARKSMAN RIFLES (DMR)
    
                if (items[eachItem]._id == hkg28) // HK G28
                {
                    items[hkg28]._props.RecoilForceUp *= this.config.hkg28VerticalRecoil
                    items[hkg28]._props.RecoilForceBack *= this.config.hkg28HorizontalRecoil
                    items[hkg28]._props.Convergence *= this.config.hkg28Convergence
                    items[hkg28]._props.RecolDispersion *= this.config.hkg28Dispersion
                    items[hkg28]._props.CameraRecoil *= this.config.hkg28CameraRecoil
                    items[hkg28]._props.CameraSnap *= this.config.hkg28CameraSnap
                }
                if (items[eachItem]._id == m1a) // M1A
                {
                    items[m1a]._props.RecoilForceUp *= this.config.m1aVerticalRecoil
                    items[m1a]._props.RecoilForceBack *= this.config.m1aHorizontalRecoil
                    items[m1a]._props.Convergence *= this.config.m1aConvergence
                    items[m1a]._props.RecolDispersion *= this.config.m1aDispersion
                    items[m1a]._props.CameraRecoil *= this.config.m1aCameraRecoil
                    items[m1a]._props.CameraSnap *= this.config.m1aCameraSnap
                }
                if (items[eachItem]._id == mk18) // Mk-18
                {
                    items[mk18]._props.RecoilForceUp *= this.config.mk18VerticalRecoil
                    items[mk18]._props.RecoilForceBack *= this.config.mk18HorizontalRecoil
                    items[mk18]._props.Convergence *= this.config.mk18Convergence
                    items[mk18]._props.RecolDispersion *= this.config.mk18Dispersion
                    items[mk18]._props.CameraRecoil *= this.config.mk18CameraRecoil
                    items[mk18]._props.CameraSnap *= this.config.mk18CameraSnap
                }
                if (items[eachItem]._id == rfb) // RFB
                {
                    items[rfb]._props.RecoilForceUp *= this.config.rfbVerticalRecoil
                    items[rfb]._props.RecoilForceBack *= this.config.rfbHorizontalRecoil
                    items[rfb]._props.Convergence *= this.config.rfbConvergence
                    items[rfb]._props.RecolDispersion *= this.config.rfbDispersion
                    items[rfb]._props.CameraRecoil *= this.config.rfbCameraRecoil
                    items[rfb]._props.CameraSnap *= this.config.rfbCameraSnap
                }
                if (items[eachItem]._id == rsass) // RSASS
                {
                    items[rsass]._props.RecoilForceUp *= this.config.rsassVerticalRecoil
                    items[rsass]._props.RecoilForceBack *= this.config.rsassHorizontalRecoil
                    items[rsass]._props.Convergence *= this.config.rsassConvergence
                    items[rsass]._props.RecolDispersion *= this.config.rsassDispersion
                    items[rsass]._props.CameraRecoil *= this.config.rsassCameraRecoil
                    items[rsass]._props.CameraSnap *= this.config.rsassCameraSnap
                }
                if (items[eachItem]._id == sr25) // SR-25
                {
                    items[sr25]._props.RecoilForceUp *= this.config.sr25VerticalRecoil
                    items[sr25]._props.RecoilForceBack *= this.config.sr25HorizontalRecoil
                    items[sr25]._props.Convergence *= this.config.sr25Convergence
                    items[sr25]._props.RecolDispersion *= this.config.sr25Dispersion
                    items[sr25]._props.CameraRecoil *= this.config.sr25CameraRecoil
                    items[sr25]._props.CameraSnap *= this.config.sr25CameraSnap
                }
                if (items[eachItem]._id == svds) // SVDS
                {
                    items[svds]._props.RecoilForceUp *= this.config.svdsVerticalRecoil
                    items[svds]._props.RecoilForceBack *= this.config.svdsHorizontalRecoil
                    items[svds]._props.Convergence *= this.config.svdsConvergence
                    items[svds]._props.RecolDispersion *= this.config.svdsDispersion
                    items[svds]._props.CameraRecoil *= this.config.svdsCameraRecoil
                    items[svds]._props.CameraSnap *= this.config.svdsCameraSnap
                }
                if (items[eachItem]._id == vss) // VSS Vintorez
                {
                    items[vss]._props.RecoilForceUp *= this.config.vssVerticalRecoil
                    items[vss]._props.RecoilForceBack *= this.config.vssHorizontalRecoil
                    items[vss]._props.Convergence *= this.config.vssConvergence
                    items[vss]._props.RecolDispersion *= this.config.vssDispersion
                    items[vss]._props.CameraRecoil *= this.config.vssCameraRecoil
                    items[vss]._props.CameraSnap *= this.config.vssCameraSnap
                }
    
                // SNIPER RIFLES //
    
                if (items[eachItem]._id == axmc) // AXMC
                {
                    items[axmc]._props.RecoilForceUp *= this.config.axmcVerticalRecoil
                    items[axmc]._props.RecoilForceBack *= this.config.axmcHorizontalRecoil
                    items[axmc]._props.Convergence *= this.config.axmcConvergence
                    items[axmc]._props.RecolDispersion *= this.config.axmcDispersion
                    items[axmc]._props.CameraRecoil *= this.config.axmcCameraRecoil
                    items[axmc]._props.CameraSnap *= this.config.axmcCameraSnap
                }
                if (items[eachItem]._id == dvl) // DVL-10
                {
                    items[dvl]._props.RecoilForceUp *= this.config.dvlVerticalRecoil
                    items[dvl]._props.RecoilForceBack *= this.config.dvlHorizontalRecoil
                    items[dvl]._props.Convergence *= this.config.dvlConvergence
                    items[dvl]._props.RecolDispersion *= this.config.dvlDispersion
                    items[dvl]._props.CameraRecoil *= this.config.dvlCameraRecoil
                    items[dvl]._props.CameraSnap *= this.config.dvlCameraSnap
                }
                if (items[eachItem]._id == m700) // M700
                {
                    items[m700]._props.RecoilForceUp *= this.config.m700VerticalRecoil
                    items[m700]._props.RecoilForceBack *= this.config.m700HorizontalRecoil
                    items[m700]._props.Convergence *= this.config.m700Convergence
                    items[m700]._props.RecolDispersion *= this.config.m700Dispersion
                    items[m700]._props.CameraRecoil *= this.config.m700CameraRecoil
                    items[m700]._props.CameraSnap *= this.config.m700CameraSnap
                }
                if (items[eachItem]._id == mosini) // Mosin (Infantry)
                {
                    items[mosini]._props.RecoilForceUp *= this.config.mosiniVerticalRecoil
                    items[mosini]._props.RecoilForceBack *= this.config.mosiniHorizontalRecoil
                    items[mosini]._props.Convergence *= this.config.mosiniConvergence
                    items[mosini]._props.RecolDispersion *= this.config.mosiniDispersion
                    items[mosini]._props.CameraRecoil *= this.config.mosiniCameraRecoil
                    items[mosini]._props.CameraSnap *= this.config.mosiniCameraSnap
                }
                if (items[eachItem]._id == mosins) // Mosin (Sniper)
                {
                    items[mosins]._props.RecoilForceUp *= this.config.mosinsVerticalRecoil
                    items[mosins]._props.RecoilForceBack *= this.config.mosinsHorizontalRecoil
                    items[mosins]._props.Convergence *= this.config.mosinsConvergence
                    items[mosins]._props.RecolDispersion *= this.config.mosinsDispersion
                    items[mosins]._props.CameraRecoil *= this.config.mosinsCameraRecoil
                    items[mosins]._props.CameraSnap *= this.config.mosinsCameraSnap
                }
                if (items[eachItem]._id == sv98) // SV-98
                {
                    items[sv98]._props.RecoilForceUp *= this.config.sv98VerticalRecoil
                    items[sv98]._props.RecoilForceBack *= this.config.sv98HorizontalRecoil
                    items[sv98]._props.Convergence *= this.config.sv98Convergence
                    items[sv98]._props.RecolDispersion *= this.config.sv98Dispersion
                    items[sv98]._props.CameraRecoil *= this.config.sv98CameraRecoil
                    items[sv98]._props.CameraSnap *= this.config.sv98CameraSnap
                }
                if (items[eachItem]._id == t5000) // T-5000
                {
                    items[t5000]._props.RecoilForceUp *= this.config.t5000VerticalRecoil
                    items[t5000]._props.RecoilForceBack *= this.config.t5000HorizontalRecoil
                    items[t5000]._props.Convergence *= this.config.t5000Convergence
                    items[t5000]._props.RecolDispersion *= this.config.t5000Dispersion
                    items[t5000]._props.CameraRecoil *= this.config.t5000CameraRecoil
                    items[t5000]._props.CameraSnap *= this.config.t5000CameraSnap
                }
                if (items[eachItem]._id == vpo215) // VPO-215
                {
                    items[vpo215]._props.RecoilForceUp *= this.config.vpo215VerticalRecoil
                    items[vpo215]._props.RecoilForceBack *= this.config.vpo215HorizontalRecoil
                    items[vpo215]._props.Convergence *= this.config.vpo215Convergence
                    items[vpo215]._props.RecolDispersion *= this.config.vpo215Dispersion
                    items[vpo215]._props.CameraRecoil *= this.config.vpo215CameraRecoil
                    items[vpo215]._props.CameraSnap *= this.config.vpo215CameraSnap
                }
    
                // PISTOLS //
    
                if (items[eachItem]._id == apb) // APB
                {
                    items[apb]._props.RecoilForceUp *= this.config.apbVerticalRecoil
                    items[apb]._props.RecoilForceBack *= this.config.apbHorizontalRecoil
                    items[apb]._props.Convergence *= this.config.apbConvergence
                    items[apb]._props.RecolDispersion *= this.config.apbDispersion
                    items[apb]._props.CameraRecoil *= this.config.apbCameraRecoil
                    items[apb]._props.CameraSnap *= this.config.apbCameraSnap
                }
                if (items[eachItem]._id == aps) // APS
                {
                    items[aps]._props.RecoilForceUp *= this.config.apsVerticalRecoil
                    items[aps]._props.RecoilForceBack *= this.config.apsHorizontalRecoil
                    items[aps]._props.Convergence *= this.config.apsConvergence
                    items[aps]._props.RecolDispersion *= this.config.apsDispersion
                    items[aps]._props.CameraRecoil *= this.config.apsCameraRecoil
                    items[aps]._props.CameraSnap *= this.config.apsCameraSnap
                }
                if (items[eachItem]._id == fn) // FN 5-7
                {
                    items[fn]._props.RecoilForceUp *= this.config.fnVerticalRecoil
                    items[fn]._props.RecoilForceBack *= this.config.fnHorizontalRecoil
                    items[fn]._props.Convergence *= this.config.fnConvergence
                    items[fn]._props.RecolDispersion *= this.config.fnDispersion
                    items[fn]._props.CameraRecoil *= this.config.fnCameraRecoil
                    items[fn]._props.CameraSnap *= this.config.fnCameraSnap
    
                    items[fnd]._props.RecoilForceUp *= this.config.fnVerticalRecoil
                    items[fnd]._props.RecoilForceBack *= this.config.fnHorizontalRecoil
                    items[fnd]._props.Convergence *= this.config.fnConvergence
                    items[fnd]._props.RecolDispersion *= this.config.fnDispersion
                    items[fnd]._props.CameraRecoil *= this.config.fnCameraRecoil
                    items[fnd]._props.CameraSnap *= this.config.fnCameraSnap
                }
                if (items[eachItem]._id == glk17) // GLOCK 17
                {
                    items[glk17]._props.RecoilForceUp *= this.config.glk17VerticalRecoil
                    items[glk17]._props.RecoilForceBack *= this.config.glk17HorizontalRecoil
                    items[glk17]._props.Convergence *= this.config.glk17Convergence
                    items[glk17]._props.RecolDispersion *= this.config.glk17Dispersion
                    items[glk17]._props.CameraRecoil *= this.config.glk17CameraRecoil
                    items[glk17]._props.CameraSnap *= this.config.glk17CameraSnap
                }
                if (items[eachItem]._id == glk18) // GLOCK 18C
                {
                    items[glk18]._props.RecoilForceUp *= this.config.glk18VerticalRecoil
                    items[glk18]._props.RecoilForceBack *= this.config.glk18HorizontalRecoil
                    items[glk18]._props.Convergence *= this.config.glk18Convergence
                    items[glk18]._props.RecolDispersion *= this.config.glk18Dispersion
                    items[glk18]._props.CameraRecoil *= this.config.glk18CameraRecoil
                    items[glk18]._props.CameraSnap *= this.config.glk18CameraSnap
                }
                if (items[eachItem]._id == glk19) // GLOCK 19X
                {
                    items[glk19]._props.RecoilForceUp *= this.config.glk19VerticalRecoil
                    items[glk19]._props.RecoilForceBack *= this.config.glk19HorizontalRecoil
                    items[glk19]._props.Convergence *= this.config.glk19Convergence
                    items[glk19]._props.RecolDispersion *= this.config.glk19Dispersion
                    items[glk19]._props.CameraRecoil *= this.config.glk19CameraRecoil
                    items[glk19]._props.CameraSnap *= this.config.glk19CameraSnap
                }
                if (items[eachItem]._id == m1911) // M1911A1
                {
                    items[m1911]._props.RecoilForceUp *= this.config.m1911VerticalRecoil
                    items[m1911]._props.RecoilForceBack *= this.config.m1911HorizontalRecoil
                    items[m1911]._props.Convergence *= this.config.m1911Convergence
                    items[m1911]._props.RecolDispersion *= this.config.m1911Dispersion
                    items[m1911]._props.CameraRecoil *= this.config.m1911CameraRecoil
                    items[m1911]._props.CameraSnap *= this.config.m1911CameraSnap
                }
                if (items[eachItem]._id == m45a1) // M45A1
                {
                    items[m45a1]._props.RecoilForceUp *= this.config.m45a1VerticalRecoil
                    items[m45a1]._props.RecoilForceBack *= this.config.m45a1HorizontalRecoil
                    items[m45a1]._props.Convergence *= this.config.m45a1Convergence
                    items[m45a1]._props.RecolDispersion *= this.config.m45a1Dispersion
                    items[m45a1]._props.CameraRecoil *= this.config.m45a1CameraRecoil
                    items[m45a1]._props.CameraSnap *= this.config.m45a1CameraSnap
                }
                if (items[eachItem]._id == m9a3) // M9A3
                {
                    items[m9a3]._props.RecoilForceUp *= this.config.m9a3VerticalRecoil
                    items[m9a3]._props.RecoilForceBack *= this.config.m9a3HorizontalRecoil
                    items[m9a3]._props.Convergence *= this.config.m9a3Convergence
                    items[m9a3]._props.RecolDispersion *= this.config.m9a3Dispersion
                    items[m9a3]._props.CameraRecoil *= this.config.m9a3CameraRecoil
                    items[m9a3]._props.CameraSnap *= this.config.m9a3CameraSnap
                }
                if (items[eachItem]._id == mp443) // MP-443 "Grach"
                {
                    items[mp443]._props.RecoilForceUp *= this.config.mp443VerticalRecoil
                    items[mp443]._props.RecoilForceBack *= this.config.mp443HorizontalRecoil
                    items[mp443]._props.Convergence *= this.config.mp443Convergence
                    items[mp443]._props.RecolDispersion *= this.config.mp443Dispersion
                    items[mp443]._props.CameraRecoil *= this.config.mp443CameraRecoil
                    items[mp443]._props.CameraSnap *= this.config.mp443CameraSnap
                }
                if (items[eachItem]._id == p226) // P226R
                {
                    items[p226]._props.RecoilForceUp *= this.config.p226VerticalRecoil
                    items[p226]._props.RecoilForceBack *= this.config.p226HorizontalRecoil
                    items[p226]._props.Convergence *= this.config.p226Convergence
                    items[p226]._props.RecolDispersion *= this.config.p226Dispersion
                    items[p226]._props.CameraRecoil *= this.config.p226CameraRecoil
                    items[p226]._props.CameraSnap *= this.config.p226CameraSnap
                }
                if (items[eachItem]._id == pb) // PB pistol
                {
                    items[pb]._props.RecoilForceUp *= this.config.pbVerticalRecoil
                    items[pb]._props.RecoilForceBack *= this.config.pbHorizontalRecoil
                    items[pb]._props.Convergence *= this.config.pbConvergence
                    items[pb]._props.RecolDispersion *= this.config.pbDispersion
                    items[pb]._props.CameraRecoil *= this.config.pbCameraRecoil
                    items[pb]._props.CameraSnap *= this.config.pbCameraSnap
                }
                if (items[eachItem]._id == pl15) // PL-15
                {
                    items[pl15]._props.RecoilForceUp *= this.config.pl15VerticalRecoil
                    items[pl15]._props.RecoilForceBack *= this.config.pl15HorizontalRecoil
                    items[pl15]._props.Convergence *= this.config.pl15Convergence
                    items[pl15]._props.RecolDispersion *= this.config.pl15Dispersion
                    items[pl15]._props.CameraRecoil *= this.config.pl15CameraRecoil
                    items[pl15]._props.CameraSnap *= this.config.pl15CameraSnap
                }
                if (items[eachItem]._id == pm) // PM pistol
                {
                    items[pm]._props.RecoilForceUp *= this.config.pmVerticalRecoil
                    items[pm]._props.RecoilForceBack *= this.config.pmHorizontalRecoil
                    items[pm]._props.Convergence *= this.config.pmConvergence
                    items[pm]._props.RecolDispersion *= this.config.pmDispersion
                    items[pm]._props.CameraRecoil *= this.config.pmCameraRecoil
                    items[pm]._props.CameraSnap *= this.config.pmCameraSnap
                }
                if (items[eachItem]._id == pmt) // PM (t) pistol
                {
                    items[pmt]._props.RecoilForceUp *= this.config.pmtVerticalRecoil
                    items[pmt]._props.RecoilForceBack *= this.config.pmtHorizontalRecoil
                    items[pmt]._props.Convergence *= this.config.pmtConvergence
                    items[pmt]._props.RecolDispersion *= this.config.pmtDispersion
                    items[pmt]._props.CameraRecoil *= this.config.pmtCameraRecoil
                    items[pmt]._props.CameraSnap *= this.config.pmtCameraSnap
                }
                if (items[eachItem]._id == sr1mp) // SR-1MP Gyurza
                {
                    items[sr1mp]._props.RecoilForceUp *= this.config.sr1mpVerticalRecoil
                    items[sr1mp]._props.RecoilForceBack *= this.config.sr1mpHorizontalRecoil
                    items[sr1mp]._props.Convergence *= this.config.sr1mpConvergence
                    items[sr1mp]._props.RecolDispersion *= this.config.sr1mpDispersion
                    items[sr1mp]._props.CameraRecoil *= this.config.sr1mpCameraRecoil
                    items[sr1mp]._props.CameraSnap *= this.config.sr1mpCameraSnap
                }
                if (items[eachItem]._id == tt) // TT pistol
                {
                    items[tt]._props.RecoilForceUp *= this.config.ttVerticalRecoil
                    items[tt]._props.RecoilForceBack *= this.config.ttHorizontalRecoil
                    items[tt]._props.Convergence *= this.config.ttConvergence
                    items[tt]._props.RecolDispersion *= this.config.ttDispersion
                    items[tt]._props.CameraRecoil *= this.config.ttCameraRecoil
                    items[tt]._props.CameraSnap *= this.config.ttCameraSnap
                }
                if (items[eachItem]._id == ttg) // TT pistol (gold)
                {
                    items[ttg]._props.RecoilForceUp *= this.config.ttgVerticalRecoil
                    items[ttg]._props.RecoilForceBack *= this.config.ttgHorizontalRecoil
                    items[ttg]._props.Convergence *= this.config.ttgConvergence
                    items[ttg]._props.RecolDispersion *= this.config.ttgDispersion
                    items[ttg]._props.CameraRecoil *= this.config.ttgCameraRecoil
                    items[ttg]._props.CameraSnap *= this.config.ttgCameraSnap
                }
                if (items[eachItem]._id == usp) // USP .45
                {
                    items[usp]._props.RecoilForceUp *= this.config.uspVerticalRecoil
                    items[usp]._props.RecoilForceBack *= this.config.uspHorizontalRecoil
                    items[usp]._props.Convergence *= this.config.uspConvergence
                    items[usp]._props.RecolDispersion *= this.config.uspDispersion
                    items[usp]._props.CameraRecoil *= this.config.uspCameraRecoil
                    items[usp]._props.CameraSnap *= this.config.uspCameraSnap
                }
                if (items[eachItem]._id == cr200) // CR 200DS
                {
                    items[cr200]._props.RecoilForceUp *= this.config.cr200VerticalRecoil
                    items[cr200]._props.RecoilForceBack *= this.config.cr200HorizontalRecoil
                    items[cr200]._props.Convergence *= this.config.cr200Convergence
                    items[cr200]._props.RecolDispersion *= this.config.cr200Dispersion
                    items[cr200]._props.CameraRecoil *= this.config.cr200CameraRecoil
                    items[cr200]._props.CameraSnap *= this.config.cr200CameraSnap
                }
                if (items[eachItem]._id == cr50) // CR 50DS
                {
                    items[cr50]._props.RecoilForceUp *= this.config.cr50VerticalRecoil
                    items[cr50]._props.RecoilForceBack *= this.config.cr50HorizontalRecoil
                    items[cr50]._props.Convergence *= this.config.cr50Convergence
                    items[cr50]._props.RecolDispersion *= this.config.cr50Dispersion
                    items[cr50]._props.CameraRecoil *= this.config.cr50CameraRecoil
                    items[cr50]._props.CameraSnap *= this.config.cr50CameraSnap
                }
                if (items[eachItem]._id == rsh12) // CR 50DS
                {
                    items[rsh12]._props.RecoilForceUp *= this.config.rsh12VerticalRecoil
                    items[rsh12]._props.RecoilForceBack *= this.config.rsh12HorizontalRecoil
                    items[rsh12]._props.Convergence *= this.config.rsh12Convergence
                    items[rsh12]._props.RecolDispersion *= this.config.rsh12Dispersion
                    items[rsh12]._props.CameraRecoil *= this.config.rsh12CameraRecoil
                    items[rsh12]._props.CameraSnap *= this.config.rsh12CameraSnap
                }
            }
        }
    }
}

module.exports = { mod: new RecoilTweaker() }