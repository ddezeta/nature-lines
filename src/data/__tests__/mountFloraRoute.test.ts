import { mountFloraRoute } from '../mountFloraRoute';

describe('mountFloraRoute', () => {
  it('should be a valid GeoJSON FeatureCollection', () => {
    expect(mountFloraRoute.type).toBe('FeatureCollection');
    expect(Array.isArray(mountFloraRoute.features)).toBe(true);
  });

  it('should have 3 features to account for trailhead, destination, and route', () => {
    expect(mountFloraRoute.features.length).toBe(3);
  });

  it('should have a LineString feature for the trail', () => {
    const lineStringFeature = mountFloraRoute.features.find(
      (f) => f.geometry.type === 'LineString'
    );
    expect(lineStringFeature).toBeDefined();
    expect(lineStringFeature?.properties?.name).toBe('Mount Flora Trail');
  });

  it('should have two Point features for trailhead and peak', () => {
    const pointFeatures = mountFloraRoute.features.filter(
      (f) => f.geometry.type === 'Point'
    );
    expect(pointFeatures.length).toBe(2);
  });

  it('should have a Point for the trailhead', () => {
    const trailhead = mountFloraRoute.features.find(
        (f) => f.properties?.type === 'trailhead'
    );
    expect(trailhead).toBeDefined();
    expect(trailhead?.geometry.type).toBe('Point');
  });

  it('should have a Point for the peak', () => {
    const peak = mountFloraRoute.features.find(
        (f) => f.properties?.type === 'peak'
    );
    expect(peak).toBeDefined();
    expect(peak?.geometry.type).toBe('Point');
  });
});
