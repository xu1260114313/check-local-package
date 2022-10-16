import { spawnSync } from 'child_process'


interface Depend {
    dependencies?: Depend;
    resolved: string;
    version: string;
}

function checkPackage(cwd: string, packageName?: string): boolean | Depend {
    const { stdout } = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['ls', `${packageName?packageName:''}`, '--json'], {
        cwd,
        encoding: 'utf-8'
    });
    let outJSON = JSON.parse(stdout);
    let dependencies: Depend | undefined = outJSON?.dependencies;
    if(dependencies && packageName) {
        return Boolean(dependencies[packageName]);
    }else if(dependencies) {
        return dependencies[packageName];
    }else {
        return false;
    }
}
export default checkPackage;