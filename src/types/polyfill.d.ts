/** @noSelf */
interface ICamera {
    shake(camera_id: string | hash | url, intensity?: number, duration?: number, duration?: hash, callback?: () => void);
    follow(camera_id: string | hash | url, target: string | hash | url, options?: ICameraFollowOption);
    screen_to_world(camera_id: string | hash | url, screen: vmath.vector3): vmath.vector3;
    use_projector(camera_id: string | hash | url, projector_id: hash);
}

interface ICameraFollowOption {
    lerp: number; offset: vmath.vector3; horizontal: boolean; vertical: boolean;
}

type Inspect = (this: void, param: any) => string;

interface ISocket {
    udp(this: void): IUnconnected;
}

interface IUnconnected {
    /** @tupleReturn */
    setsockname(address: string, port: number): [number, string];
    /** @tupleReturn */
    sendto(datagram: string, ip: string, port: number): [number, string];
    /** @tupleReturn */
    receive(size: number = null): [string, string];
}