import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

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
        }
    }
}

module.exports = { mod: new RecoilTweaker() }