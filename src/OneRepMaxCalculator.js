import oneRepMax from "one-rep-max";

export default function orp(w, r) {
    
    parseInt(w);
    parseInt(r);

    if (r == 0) {
        return w;
    }
    if (w == 0) {
        return 0;
    }

    const args = {
        weight: w,
        reps: r
      }

    return oneRepMax.brzycki(args);
}