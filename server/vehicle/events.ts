import { OxVehicle } from './class';

on('onResourceStop', (resource: string) => OxVehicle.saveAll(resource, true));

on('entityRemoved', (entityId: number) => {
	const vehicle = OxVehicle.get(entityId);

	if (!vehicle) return;

	//   vehicle.setStored('impound', true);
	console.log(`[OX] Vehicle ${vehicle.id} (${vehicle.plate}) has been randomly deleted.`);
});
