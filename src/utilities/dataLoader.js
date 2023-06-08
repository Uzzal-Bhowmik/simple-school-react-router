export const loader = async () => {
    const clgFacilities = await (await fetch("/college-facilities.json")).json();
    return ({ clgFacilities });
}