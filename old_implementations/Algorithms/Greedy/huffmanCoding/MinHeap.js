var MinHeap = function() {
	var heap = [];

	this.p = function() {
		console.log(heap);
	}

	this.length = function() {
		return heap.length;
	}

	var swap = function(index1, index2) {
		var temp = heap[index1];
		heap[index1] = heap[index2];
		heap[index2] = temp;
	}

	var getParentIndex = function(index) {
		return Math.floor((index-1)/2);
	}

	var getLChildIndex = function(index) {
		return index*2 + 1;
	}

	var getRChildIndex = function(index) {
		return index*2 + 2;
	}

	var bubbleUp = function(index) {
		while(index != 0 && heap[getParentIndex(index)].freq > heap[index].freq) {
			var pi = getParentIndex(index);
			swap(index, pi);
			index = pi;
		}
	}

	var bubbleDown = function(index) {
		var left = getLChildIndex(index);
		var right = getRChildIndex(index);
		if(left >= heap.length && right >= heap.length)
			return;
		else if (right >= heap.length && heap[left].freq < heap[index].freq) {
			swap(index, left);
			bubbleDown(left);
		}
		else {
			var smaller = !heap[right] || (heap[left].freq <= heap[right].freq) ? left : right;
			if(heap[smaller].freq < heap[index].freq) {
				swap(index, smaller);
				bubbleDown(smaller);
			}
		}
	}

	this.insert = function(value) {
		if(!value)
			return false;
		var index = heap.length;
		heap[index] = value;
		bubbleUp(index);
		return true;
	}

	this.extract = function() {
		if(heap.length == 0)
			return null;
		var ret = heap[0];
		swap(0, heap.length-1);
		heap.splice(-1, 1);
		bubbleDown(0);
		return ret;
	}
}
